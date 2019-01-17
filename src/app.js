import { h, Component } from 'preact';
import { ipcRenderer } from 'electron';
import { Header } from './components/header';
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

  componentDidMount() {
    ipcRenderer.send('fetch');

    ipcRenderer.on('update', (sender, routes) => {
      console.log(`routes`, routes);

      if (!routes) {
        return this.setState({ loading: false, error: true });
      }

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

    return (
      <div>
        <Header reFetch={this.handleReFetch} />
        {error || loading ? (
          <Fallback error={error} />
        ) : (
          routes.map(route => <RouteItem route={route} />)
        )}
        {/* <Footer /> */}
      </div>
    );
  }
}
