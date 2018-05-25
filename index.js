const { ipcRenderer } = require('electron');
// const { harvard, southStation } = require('./routes.json');

const body = document.body;
body.style.backgroundColor = 'darkred';
// const MBTA_KEY = `in4xyhrvYECHsY5SU1oGBw`;

// const cache = new Map();

let timeout;
const swapHandle = (event) => {
    console.log('body clicked');
    ipcRenderer.send('new-route');
};

body.addEventListener('click', swapHandle);

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

// getNext(southStation);

// function getNext(route) {
//     body.removeEventListener('click', swapHandle);
//     swapHandle = (event) => swap(route);
//     body.addEventListener('click', swapHandle);
    
//     clearTimeout(timeout);

//     fetchData(route)
//         .catch(err => console.error(err))
//         .then(data => {
//             if (!data || !data.mode) {
//                 body.innerHTML = '<center><h1>No data</h1></center>';
//                 return;
//             }

//             const stopName = data.stop_name;
//             const buses = data.mode[0].route[0].direction[0].trip;
//             if (!buses || !buses.length) {
//                 body.innerHTML = `<center><h3>No ${route.mode}</h3></center>`;
//                 return;
//             }
//             const times = buses
//                 .map(bus => Math.floor(bus.pre_away / 60))
//                 .filter(mins => mins > 1)
//                 .slice(0, 4)
//                 .sort((a, b) => a - b);

//             style(route, times);

//             timeout = setTimeout(() => {
//                 getNext(route);
//             }, 60 * 1000);
//         });
// }

// function fetchData(route) {
//     const destUrl = `http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=${MBTA_KEY}&stop=${route.code}&format=json`;
//     const cached = cache.get(route.name);
//     const withinTTL = (ts) => (Date.now() - ts) < (50 * 1000);
//     return (cached && withinTTL(cached.ts)) ? Promise.resolve(cached)
//         : fetch(destUrl)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(`not cached`);
//                 cache.set(route.name, Object.assign(data, { ts: Date.now() }));
//                 return data;
//             });
// }

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

// function swap(route) {
//     const otherRoute = (route === harvard) ? southStation : harvard;
//     ipcRenderer.send('new-route', route);
// }