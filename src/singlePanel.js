import { h } from 'preact';
import { Title } from './title';
import { Arrivals } from './arrivals';

export const SinglePanel = ({ route, minsToArrival }) => {
  return (
    <center>
      <Title route={route} />
      <Arrivals minsToArrival={minsToArrival} />
    </center>
  );
};
