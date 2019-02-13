import { h, Component } from 'preact';
import styled from 'styled-components';
import { fetchData } from './fetchData';
import { Header } from './components/header';
import { RouteItem } from './components/route-item';
import { Footer } from './components/footer';
import { Fallback } from './components/fallback';

const StyledContainer = styled.div`
  max-width: 380px;
  margin: auto;
  border-left: 1px solid #444;
  border-right: 1px solid #444;
`;

export default class App extends Component {
  state = {
    routes: [],
    error: null,
    loading: true,
  };

  fetchNewData = () => {
    fetchData().then(routes => {
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
  };

  kickoffFetchLoop = () => {
    this.fetchNewData();
    this.fetchInterval = setInterval(() => {
      this.fetchNewData();
    }, 1000 * 30);
  };

  componentDidMount() {
    // ipcRenderer.send('fetch');

    // ipcRenderer.on('update', (sender, routes) => {
    this.kickoffFetchLoop();
  }

  handleReFetch = () => {
    // ipcRenderer.send('fetch');
    clearInterval(this.fetchInterval);
    this.kickoffFetchLoop();
  };

  componentWillUnmount() {
    clearInterval(this.fetchInterval);
  }

  render() {
    const { routes, error, loading } = this.state;

    return (
      <StyledContainer>
        <Header reFetch={this.handleReFetch} />
        {error || loading ? (
          <Fallback error={error} />
        ) : (
          routes.map(route => <RouteItem route={route} />)
        )}
        {/* <Footer /> */}
      </StyledContainer>
    );
  }
}
