import { h, Component } from 'preact';
import { ipcRenderer } from 'electron';
import { Title } from './components/title';
import { Arrivals } from './components/arrivals';
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

  waitForLoad = null;

  componentDidMount() {
    document.body.addEventListener('click', this.handleClick);

    ipcRenderer.send('fetch');
    ipcRenderer.on('update', (sender, routes) => {
      console.log(`routes`, routes);
      clearTimeout(this.waitForLoad);

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
    // document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = () => {
    ipcRenderer.send('fetch');
    this.waitForLoad = setTimeout(() => {
      this.setState({ loading: true });
    }, LOADING_THRESHOLD);
  };

  render() {
    const { routes, error, loading } = this.state;
    console.log(`this.state:`, this.state);
    // Send event to main process to change icon color
    // ipcRenderer.send('change-icon', color);

    return error || loading ? (
      <Fallback error={error} />
    ) : (
      <center>
        <Title />
        <Arrivals routes={routes} />
        <Footer />
      </center>
    );
  }
}
