const path = require('path');
const MBTA = require('mbta-client');
const { app, BrowserWindow, Tray, ipcMain } = require('electron');
const {
  clearway,
  backBayOrange,
  backBayCR,
  harvard,
  southStation,
} = require('./resources/routes.json');

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
  tray = new Tray(path.join(assetsDir, 'mbta-logo-black.png'));
  window = new BrowserWindow({
    width: 260,
    height: 400,
    show: false,
    frame: false,
    resizable: false,
  });

  fetchAndSend(routes[currentIndex]);

  tray.on('click', event => {
    fetchAndSend(routes[currentIndex]);
    toggleWindow();
  });
  tray.on('double-click', event => {
    window.openDevTools({ mode: 'detach' });
  });

  window.loadURL(`file://${path.join(__dirname, 'index.html')}`);
  window.on('blur', () => {
    window.hide();
  });
});

ipcMain.on('new-route', (sender, data) => {
  const newIndex =
    data && data.key === 'ArrowLeft'
      ? getPrevIndex(routes, currentIndex)
      : getNextIndex(routes, currentIndex);

  currentIndex = newIndex;
  fetchAndSend(routes[newIndex]);
});

ipcMain.on('change-icon', (sender, data) => {
  const color = data === 'darkred' ? 'black' : 'green';
  tray.setImage(path.join(assetsDir, `mbta-logo-${color}.png`));
});

ipcMain.on('hide-window', (sender, data) => {
  window.hide();
});

const getNextIndex = (arr, i) => (i < arr.length - 1 ? i + 1 : 0);
const getPrevIndex = (arr, i) => (i < 1 ? arr.length - 1 : i - 1);

const fetchAndSend = route => {
  clearTimeout(timeout);

  return fetchData(route).then(data => {
    // Send update event to browser window
    window.webContents.send('update', { ...data, route });

    // Kick off check every 60 seconds
    timeout = setTimeout(() => {
      fetchAndSend(route);
    }, 60 * 1000);
  });
};

const fetchData = route => {
  const cached = cache.get(route.name);
  const withinTTL = cached && Date.now() - cached.ts < CACHE_TTL;

  // Use cache if within TTL, otherwise fetch live data.
  // Click to your heart's delight and this will only fetch once a minute
  if (withinTTL) return Promise.resolve(cached);

  return mbta
    .fetchPredictions({
      limit: 4,
      stop: route.code,
      direction_id: route.direction,
      sort: 'arrival_time',
    })
    .then(result => {
      console.log(`Fetched live data`);
      const arrivalMins = mbta.selectArrivals(result, { convertTo: 'min' });
      const extra = {
        ts: Date.now(),
        arrivalMins: arrivalMins.filter(arrival => arrival > 2),
      };
      const cachedPrediction = { ...result, ...extra };
      cache.set(route.name, cachedPrediction);
      return cachedPrediction;
    })
    .catch(err => {
      console.error('Error during fetch:', err.message);
      return null;
    });
};

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide();
  } else {
    showWindow();
  }
};

const showWindow = () => {
  const trayPos = tray.getBounds();
  const windowPos = window.getBounds();
  const x = Math.round(trayPos.x + trayPos.width / 2 - windowPos.width / 2);
  const y = Math.round(trayPos.y + trayPos.height);

  window.setPosition(x, y, false);
  window.show();
  window.focus();
};
