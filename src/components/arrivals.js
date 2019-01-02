import { h } from 'preact';
import { RouteDisplay } from './route-display';

export const Arrivals = ({ routes }) => (
  <div>
    {Object.keys(routes).map(route => (
      <RouteDisplay route={routes[route]} />
    ))}
  </div>
);
