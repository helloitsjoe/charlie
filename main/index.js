const path = require('path');
const MBTA = require('mbta-client');
const { app, BrowserWindow, Tray, ipcMain } = require('electron');
const routesConfig = require('../resources/routes.config.js');
const routes = Object.values(routesConfig);

let mbtaKey;
try {
  mbtaKey = require('../resources/credentials.json').mbtaKey;
} catch (err) {
  console.warn('Missing API key, making call without key...');
}

const PREDICTIONS_LIMIT = 4;
const ROUTE_HEIGHT = 90;
const HEADER_AND_FOOTER_HEIGHT = 90;
const assetsDir = path.join(__dirname, '../assets');
const mbta = new MBTA(mbtaKey);

let tray;
let window;
let timeout;

app.on('ready', () => {
  tray = new Tray(path.join(assetsDir, 'mbta-logo-black.png'));
  window = new BrowserWindow({
    width: 380,
    height: routes.length * ROUTE_HEIGHT + HEADER_AND_FOOTER_HEIGHT,
    show: false,
    frame: false,
    resizable: false,
  });

  window.loadURL(`file://${path.join(__dirname, '../index.html')}`);
  window.on('blur', window.hide);

  tray.on('click', () => toggleWindow());
  tray.on('double-click', () => window.openDevTools({ mode: 'detach' }));

  ipcMain.on('fetch', () => fetchAndSend(routes));
  ipcMain.on('hide-window', () => window.hide());

  // ipcMain.on('change-icon', (sender, data) => {
  //   const color = data === 'red' ? 'black' : 'green';
  //   tray.setImage(path.join(assetsDir, `mbta-logo-${color}.png`));
  // });
});

const fetchAndSend = routes => {
  clearTimeout(timeout);

  return fetchData(routes).then(predictions => {
    // Send update event to browser window
    window.webContents.send('update', predictions);

    // Kick off check every 60 seconds
    timeout = setTimeout(() => {
      fetchAndSend(routes);
    }, 60 * 1000);
  });
};

const fetchData = async routes => {
  const predictionPromises = Promise.all(
    routes.map(route =>
      mbta.fetchPredictions({
        // limit: PREDICTIONS_LIMIT,
        stop: route.code,
        direction_id: route.direction,
        sort: 'arrival_time',
        include: ['stop', 'route'],
      })
    )
  );

  try {
    const predictions = await predictionPromises;
    console.log(`Fetched live data`);

    return predictions.map((pre, index) => {
      const arrivals = mbta.selectArrivals(pre, { convertTo: 'min' });
      const stopName = mbta.selectIncluded(pre, 'stop')[0].attributes.name;
      const routeAttrs = mbta.selectIncluded(pre, 'route')[0].attributes;
      const directionIdx = pre.data[0].attributes.direction_id;
      const direction =
        routeAttrs.direction_destinations[directionIdx] ||
        routeAttrs.direction_names[directionIdx];

      const color = routeAttrs.color;
      const textColor = routeAttrs.text_color;
      const arrivalMins = arrivals.filter(min => min > 2 && min < 60).slice(0, PREDICTIONS_LIMIT);
      const _pastArrivalMins = arrivals.filter(min => min <= 2);

      const { waitStart, waitLength } = routes[index];
      const isWalkable = arrivals.some(
        mins => mins >= waitStart && mins <= waitStart + waitLength
      );

      return {
        color,
        stopName,
        direction,
        textColor,
        isWalkable,
        arrivalMins,
        // for debugging client side
        _pastArrivalMins,
        _prediction: pre,
      };
    });
  } catch (e) {
    console.error('Error during fetch:', e);
    const { message, stack } = e;
    return { error: { message, stack } };
  }
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
