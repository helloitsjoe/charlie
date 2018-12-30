import { h, Component } from 'preact';
import { ipcRenderer } from 'electron';
import { SinglePanel } from './singlePanel';

export default class App extends Component {
  state = {
    route: null,
    minsToArrival: [],
    error: null,
    loading: true,
    backgroundClass: 'darkgreen',
  };

  componentDidMount() {
    document.body.addEventListener('click', this.handleClick);

    ipcRenderer.on('update', (sender, data) => {
      if (!data || !data.data || !data.route) {
        // body.innerHTML = '<center><h1>No data</h1></center>';
        return this.setState({ loading: false, error: true });
      }

      const route = data.route;
      const buses = data.data;
      // if (!buses || !buses.length) {
      //   body.innerHTML = `<center><h3>No ${route.mode}</h3></center>`;
      //   return;
      // }
      const minsToArrival = buses
        .map(bus => {
          const msUntilArrival =
            new Date(bus.attributes.arrival_time) - Date.now();
          return Math.floor(msUntilArrival / 1000 / 60);
        })
        .filter(mins => mins > 1)
        .slice(0, 4);

      const { waitStart, waitLength } = route;
      const isWalkable = mins =>
        mins >= waitStart && mins <= waitStart + waitLength;

      document.body.style.backgroundColor = minsToArrival.some(isWalkable)
        ? 'darkgreen'
        : 'darkred';

      this.setState({
        route,
        minsToArrival,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick);
  }

  handleClick = () => ipcRenderer.send('new-route');

  render() {
    const { route, minsToArrival } = this.state;
    const props = { route, minsToArrival };

    // Send event to main process to change icon color
    ipcRenderer.send('change-icon', document.body.style.backgroundColor);

    if (this.state.loading) return 'WAIT';
    if (this.state.error) return 'FUCK';

    return <SinglePanel {...props} />;
  }
}
