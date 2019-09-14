/* eslint-disable function-paren-newline */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fetchDataNative from './fetchData';
import { usePullRefresh } from './utils';
import Header from './components/header';
import RouteItem from './components/route-item';
import Spacer from './components/spacer';
import Fallback from './components/fallback';
import Footer from './components/footer';

const StyledContainer = styled.div`
  max-width: 380px;
  margin: auto;
  background-color: #191919;
`;

export default function App({ getHourOfDay, fetchData }) {
  const [state, setState] = useState({
    routes: [],
    loading: true,
    error: null,
  });
  const [count, setCount] = useState(0);

  const updateState = newState => setState(s => ({ ...s, ...newState }));

  useEffect(() => {
    const fetchNewData = () => {
      updateState({ loading: true });

      fetchData()
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
  }, [fetchData, count]);

  const handleReFetch = useCallback(() => setCount(c => c + 1), []);

  usePullRefresh(handleReFetch);

  const getCombinedRoutes = routes =>
    getHourOfDay() < 12
      ? ['Inbound', ...routes.morning, 'Outbound', ...routes.evening]
      : ['Outbound', ...routes.evening, 'Inbound', ...routes.morning];

  const { routes, error, loading } = state;

  return (
    <StyledContainer data-testid="app">
      <Header reFetch={handleReFetch} />
      {error || loading ? (
        <Fallback error={error} />
      ) : (
        getCombinedRoutes(routes).map(route =>
          typeof route === 'string' ? (
            <Spacer key={route} text={route} />
          ) : (
            <RouteItem key={route.id} route={route} />
          )
        )
      )}
      <Footer hourOfDay={getHourOfDay()} />
    </StyledContainer>
  );
}
App.propTypes = {
  fetchData: PropTypes.func,
  getHourOfDay: PropTypes.func,
};

App.defaultProps = {
  fetchData: fetchDataNative,
  getHourOfDay: () => new Date().getHours(),
};
