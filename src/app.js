/* eslint-disable function-paren-newline */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import loadable from '@loadable/component';
import { createDebug } from 'dom-debug';
import fetchDataNative from './fetchData';
import { usePullRefresh, getParams } from './utils';
import Header from './components/header';
import Error from './components/error';
// import Footer from './components/footer';
import RouteItem from './components/route-item';
import Spacer from './components/spacer';
import routeConfig from '../resources/routes.config.json';

// const enabledRoutes = Object.values(routeConfig.enabled);

// Could lazy load, but it doesn't save much from the initial bundle.
// Cool that @loadable/component works with preact though!
// const RouteItem = loadable(() => import('./components/route-item'));
// const Spacer = loadable(() => import('./components/spacer'));

const debug = createDebug({ enabled: getParams('debug') });

const StyledContainer = styled.div`
  max-width: 380px;
  margin: auto;
  background-color: #191919;
`;

const appReducer = (s, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH':
      return { ...s, status: 'LOADING', error: null };
    case 'SUCCESS':
      return { ...s, status: 'IDLE', routes: payload, error: null };
    case 'ERROR':
      return { ...s, status: 'ERROR', error: payload };
    default:
      return s;
  }
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 0));

export default function App({
  getHourOfDay,
  fetchData,
  defaultRoutes = routeConfig.enabled,
}) {
  const [enabledRoutes, setEnabledRoutes] = useState(
    Object.values(defaultRoutes),
  );

  const [state, dispatch] = useReducer(appReducer, {
    status: 'LOADING',
    error: null,
    routes: enabledRoutes.map(({ morning }, i) => ({ morning, id: i })),
  });

  const [count, setCount] = useState(0);

  const handleAddStop = (newStop) => {
    console.log('newStop', newStop);
    setEnabledRoutes((e) => [...e, newStop]);
  };

  useEffect(() => {
    const fetchNewData = () => {
      return fetchData({ routes: enabledRoutes })
        .then((data) => {
          return wait().then(() => {
            return data;
          });
        })
        .then((routes) => {
          if (routes.error) {
            throw routes.error;
          }

          // console.log(`routes`, routes);
          dispatch({ type: 'SUCCESS', payload: routes });
        })
        .catch((error) => {
          console.error(error.stack);
          debug(error.message);
          debug(error.stack);
          dispatch({ type: 'ERROR', payload: error });
        });
    };

    dispatch({ type: 'FETCH' });
    fetchNewData();
    const fetchInterval = setInterval(() => {
      fetchNewData();
    }, 1000 * 30);

    return () => clearInterval(fetchInterval);
  }, [fetchData, count, enabledRoutes]);

  const handleReFetch = useCallback(() => setCount((c) => c + 1), []);

  usePullRefresh(handleReFetch);

  const getCombinedRoutes = (routes) => {
    const morning = ['Inbound', ...routes.filter((route) => route.morning)];
    const evening = ['Outbound', ...routes.filter((route) => !route.morning)];

    return getHourOfDay() < 12
      ? [...morning, ...evening]
      : [...evening, ...morning];
  };

  const { routes, status, error } = state;

  return (
    <StyledContainer data-testid="app">
      <Header reFetch={handleReFetch} onAddStop={handleAddStop} />
      {status === 'ERROR' ? (
        <Error error={error} />
      ) : (
        getCombinedRoutes(routes).map((route) =>
          console.log('route', route) || typeof route === 'string' ? (
            <Spacer key={route} text={route} />
          ) : (
            <RouteItem key={route.id} {...route} />
          ),
        )
      )}
      {/* <Footer hourOfDay={getHourOfDay()} /> */}
    </StyledContainer>
  );
}
App.propTypes = {
  fetchData: PropTypes.func,
  getHourOfDay: PropTypes.func,
  defaultRoutes: PropTypes.object, // eslint-disable-line
};

App.defaultProps = {
  fetchData: fetchDataNative,
  getHourOfDay: () => new Date().getHours(),
  defaultRoutes: routeConfig.enabled,
};
