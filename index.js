const { ipcRenderer } = require('electron');

const body = document.body;

body.addEventListener('click', (event) => ipcRenderer.send('new-route'));
body.style.backgroundColor = 'darkred';

ipcRenderer.on('clicked', (sender, data) => {
    console.log(`data:`, data);
    const route = data.route;
    if (!data || !data.mode) {
        body.innerHTML = '<center><h1>No data</h1></center>';
        return;
    }

    const stopName = data.stop_name;
    const buses = data.mode[0].route[0].direction[0].trip;
    if (!buses || !buses.length) {
        body.innerHTML = `<center><h3>No ${route.mode}</h3></center>`;
        return;
    }
    const times = buses
        .map(bus => Math.floor(bus.pre_away / 60))
        .filter(mins => mins > 1)
        .slice(0, 4)
        .sort((a, b) => a - b);

    style(route, times);
});

function style(route, times) {

    const styleEach = (min) => `<h2><span class="bold">${min} </span><span class="small">mins</span></h2>`

    body.innerHTML = `
        <center>
        <div class="header">
            <h4 class="short">${route.name.toUpperCase()}</h4>
            <h5 class="short light">Next ${route.mode} in:</h5>
        </div>
        <div class="${(times.length < 4) ? "pad" : ""}">
        ${times.map(styleEach).join('')}
        </div>
        </center>`;
        
    const isWalkable = (mins) => mins > route.tooClose && mins < route.tooFar;
    body.style.backgroundColor = times.some(isWalkable) ? 'darkgreen' : 'darkred';
}
