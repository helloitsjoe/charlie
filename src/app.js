import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchData } from './fetchData';
import { Header } from './components/header';
import { RouteItem } from './components/route-item';
import { Spacer } from './components/spacer';
import { Fallback } from './components/fallback';

const StyledContainer = styled.div`
  max-width: 380px;
  margin: auto;
  background-color: #191919;
`;

const usePullRefresh = trigger => {
  useEffect(() => {
    let downY;
    let upY;
    const setDownY = e => {
      downY = e.targetTouches[0].clientY;
    };
    const setUpY = e => {
      upY = e.changedTouches[0].clientY;
      if (upY > downY) {
        trigger();
      }
    };

    document.addEventListener('touchstart', setDownY);
    document.addEventListener('touchend', setUpY);

    return () => {
      document.removeEventListener('touchstart', setDownY);
      document.removeEventListener('touchend', setUpY);
    };
  }, []);
};

export default function App(props) {
  const [state, setState] = useState({
    routes: [],
    loading: true,
    error: null,
  });
  const [count, setCount] = useState(0);

  const updateState = newState => setState(s => ({ ...s, ...newState }));

  useEffect(
    () => {
      const fetchNewData = () => {
        updateState({ loading: true });
        props
          .fetchData()
          .then(routes => {
            if (routes.error) {
              console.error(routes.error.stack);
              updateState({ loading: false, error: routes.error });
              return;
            }

            console.log(`routes`, routes);
            updateState({ loading: false, error: null, routes });
          })
          .catch(error => {
            updateState({ loading: false, error });
          });
      };

      fetchNewData();
      const fetchInterval = setInterval(() => {
        fetchNewData();
      }, 1000 * 30);

      return () => clearInterval(fetchInterval);
    },
    [count]
  );

  const handleReFetch = () => setCount(c => c + 1);

  usePullRefresh(handleReFetch);

  const getCombinedRoutes = routes => {
    return props.hourOfDay < 12
      ? ['Inbound', ...routes.morning, 'Outbound', ...routes.evening]
      : ['Outbound', ...routes.evening, 'Inbound', ...routes.morning];
  };

  const { routes, error, loading } = state;

  return (
    <StyledContainer data-testid="app">
      <Header reFetch={handleReFetch} />
      {error || loading ? (
        <Fallback error={error} />
      ) : (
        getCombinedRoutes(routes).map(route => {
          return typeof route === 'string' ? (
            <Spacer key={route} text={route} />
          ) : (
            <RouteItem key={route.id} route={route} />
          );
        })
      )}
      {/* <Footer /> */}
    </StyledContainer>
  );
}
App.propTypes = {
  fetchData: PropTypes.func,
  hourOfDay: PropTypes.number,
};

App.defaultProps = {
  fetchData,
  hourOfDay: new Date().getHours(),
};
