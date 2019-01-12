import { h, Component } from 'preact';
import { ipcRenderer } from 'electron';
import { Header } from './components/header';
// import { Arrivals } from './components/arrivals';
import { RouteItem } from './components/route-item';
import { Footer } from './components/footer';
import { Fallback } from './components/fallback';

const LOADING_THRESHOLD = 150;
const GREEN = 'green';
const RED = 'red';

export default class App extends Component {
  state = {
    routes: [],
    error: null,
    loading: true,
    // color: GREEN,
  };

  // waitForLoad = null;

  componentDidMount() {
    document.body.addEventListener('click', this.handleClick);

    ipcRenderer.send('fetch');
    ipcRenderer.on('update', (sender, routes) => {
      console.log(`routes`, routes);
      // clearTimeout(this.waitForLoad);

      if (!routes) {
        return this.setState({ loading: false, error: true });
      }

      // const { routes } = data;

      // const { waitStart, waitLength } = route;
      // const isWalkable = mins =>
      //   mins >= waitStart && mins <= waitStart + waitLength;

      this.setState({
        routes,
        error: false,
        loading: false,
        // color: minsToArrival.some(isWalkable) ? GREEN : RED,
      });
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick);
  }

  handleReFetch = () => {
    ipcRenderer.send('fetch');
  };

  render() {
    const { routes, error, loading } = this.state;

    return error || loading ? (
      <Fallback error={error} />
    ) : (
      <center>
        <Header reFetch={this.handleReFetch} />
        {/* <Arrivals routes={routes} /> */}
        {routes.map(route => (
          <RouteItem route={route} />
        ))}

        {/* <Footer /> */}
      </center>
    );
  }
}
