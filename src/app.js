import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchData } from './fetchData';
import { Header } from './components/header';
import { RouteItem } from './components/route-item';
import { Footer } from './components/footer';
import { Spacer } from './components/spacer';
import { Fallback } from './components/fallback';

const StyledContainer = styled.div`
  max-width: 380px;
  margin: auto;
  background-color: #191919;
`;

export default function App() {
  const [routes, setRoutes] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refetchCount, setRefetch] = useState(0);

  useEffect(
    () => {
      function fetchNewData() {
        fetchData().then(routes => {
          if (routes.error) {
            console.error(routes.error.stack);
            return setError(true);
          }

          console.log(`routes`, routes);
          setRoutes(routes);
          setError(false);
          setLoading(false);
        });
      }

      fetchNewData();
      const intervalId = setInterval(() => {
        fetchNewData();
      }, 1000 * 30);

      return () => {
        clearInterval(intervalId);
      };
    },
    [refetchCount]
  );

  function getCombinedRoutes() {
    return new Date().getHours() < 12
      ? [...routes.morning, null, ...routes.evening]
      : [...routes.evening, null, ...routes.morning];
  }

  const handleRefetch = () => setRefetch(r => r + 1);

  return (
    <StyledContainer>
      <Header reFetch={handleRefetch} />
      {error || loading ? (
        <Fallback error={error} />
      ) : (
        getCombinedRoutes().map(route =>
          route == null ? (
            <Spacer key="spacer" />
          ) : (
            <RouteItem key={route.id} route={route} />
          )
        )
      )}
    </StyledContainer>
  );
}
