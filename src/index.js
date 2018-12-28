const { ipcRenderer } = require('electron');

const body = document.body;

body.addEventListener('click', event => {
  ipcRenderer.send('new-route');
});
body.style.backgroundColor = 'darkred';

ipcRenderer.on('update', (sender, data) => {
  if (!data || !data.data || !data.route) {
    body.innerHTML = '<center><h1>No data</h1></center>';
    return;
  }

  const route = data.route;
  const buses = data.data;
  if (!buses || !buses.length) {
    body.innerHTML = `<center><h3>No ${route.mode}</h3></center>`;
    return;
  }
  const arrivalMins = buses
    .map(bus => {
      const msUntilArrival = new Date(bus.attributes.arrival_time) - Date.now();
      return Math.floor(msUntilArrival / 1000 / 60);
    })
    .filter(mins => mins > 1)
    .slice(0, 4);

  render(route, arrivalMins);
});

function render(route, times) {
  const renderEachTime = min =>
    `<h2><span class="bold">${min} </span><span class="small">mins</span></h2>`;

  body.innerHTML = `
        <center>
        <div class="header">
            <h4 class="short">${route.name.toUpperCase()}</h4>
            <h5 class="short light">Next ${route.mode} in:</h5>
        </div>
        <div class="${times.length < 4 ? 'pad' : ''}">
            ${times.map(renderEachTime).join('')}
        </div>
        </center>`;

  const { waitStart, waitLength } = route;
  const isWalkable = mins =>
    mins >= waitStart && mins <= waitStart + waitLength;
  body.style.backgroundColor = times.some(isWalkable) ? 'darkgreen' : 'darkred';

  // Send event to main process to change icon color
  ipcRenderer.send('change-icon', body.style.backgroundColor);
}
