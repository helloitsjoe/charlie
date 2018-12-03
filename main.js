const path = require('path');
const MBTA = require('../mbta-client');
const { app, BrowserWindow, Tray, ipcMain } = require('electron');
const { clearway, backBayOrange, backBayCR, harvard, southStation } = require('./resources/routes.json');

let mbtaKey;
try {
    mbtaKey = require('./resources/credentials.json').mbtaKey;
} catch (err) {
    console.warn('Missing API key, making call without key...');
}

const CACHE_TTL = 60 * 1000;
const assetsDir = path.join(__dirname, 'assets');
const cache = new Map();
const mbta = new MBTA(mbtaKey);

let tray;
let window;
let timeout;
const routes = [backBayOrange, backBayCR, southStation, clearway];
let currentIndex = 0;

app.on('ready', () => {
    tray = new Tray(path.join(assetsDir, 'icon.png'));
    window = new BrowserWindow({
        width: 260,
        height: 400,
        show: false,
        frame: false,
        resizable: false,
    });

    fetchAndSend(routes[currentIndex]);

    tray.on('click', (event) => {
        fetchAndSend(routes[currentIndex]);
        toggleWindow();
    });
    tray.on('double-click', (event) => {
        window.openDevTools({
            mode: 'detach'
        });
    });

    window.loadURL(`file://${path.join(__dirname, 'index.html')}`);
    window.on('blur', () => {
        window.hide();
    });
});

ipcMain.on('new-route', (sender) => {
    const newIndex = getNextIndex(routes, currentIndex);
    currentIndex = newIndex;
    fetchAndSend(routes[newIndex]);
});

ipcMain.on('change-icon', (sender, data) => {
    const icon = data === 'darkred' ? 'icon' : 'greenIcon';
    tray.setImage(path.join(assetsDir, `${icon}.png`))
});

const getNextIndex = (arr, i) => i < arr.length - 1 ? i + 1 : 0;

const fetchAndSend = (route) => {
    clearTimeout(timeout);

    return fetchData(route)
        .then(data => {
            // Send update event to browser window
            window.webContents.send('update', Object.assign({}, data, {
                route
            }));

            // Kick off check every 60 seconds
            timeout = setTimeout(() => {
                fetchAndSend(route);
            }, 60 * 1000);
        });
}

const fetchData = (route) => {
    const cached = cache.get(route.name);
    const withinTTL = cached && (Date.now() - cached.ts) < CACHE_TTL;

    // Use cache if within TTL, otherwise fetch live data.
    // Click to your heart's delight and this will only fetch once a minute
    if (withinTTL) return Promise.resolved(cached);

    return mbta
        .predict({
            stopID: route.code,
            directionID: route.direction,
            sort: 'arrival_time',
        })
        .then(prediction => {
            console.log(`Fetched live data`);
            const cachedPrediction = Object.assign(prediction, {
                ts: Date.now(),
                arrivalMins: mbta.arrivals({ limit: 4, timeUnits: 'MINUTES' }),
            });
            cache.set(route.name, cachedPrediction);
            return cachedPrediction;
        }).catch(err => {
            console.error('Error during fetch:', err);
            return null;
        });
}

const toggleWindow = () => {
    if (window.isVisible()) {
        window.hide();
    } else {
        showWindow();
    }
}

const showWindow = () => {
    const trayPos = tray.getBounds();
    const windowPos = window.getBounds();
    const x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2));
    const y = Math.round(trayPos.y + trayPos.height);

    window.setPosition(x, y, false);
    window.show();
    window.focus();
}