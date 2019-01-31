import { h, Component } from 'preact';
import { ipcRenderer } from 'electron';
import { Header } from './components/header';
import { RouteItem } from './components/route-item';
import { Footer } from './components/footer';
import { Fallback } from './components/fallback';

export default class App extends Component {
  state = {
    routes: [],
    error: null,
    loading: true,
  };

  componentDidMount() {
    ipcRenderer.send('fetch');

    ipcRenderer.on('update', (sender, routes) => {
      if (routes.error) {
        console.error(routes.error.stack);
        return this.setState({ loading: false, error: true });
      }

      console.log(`routes`, routes);
      this.setState({
        routes,
        error: false,
        loading: false,
      });
    });
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
