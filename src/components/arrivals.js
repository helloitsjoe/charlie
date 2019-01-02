import { h } from 'preact';
import { RouteItem } from './route-item';

export const Arrivals = ({ routes }) => (
  <div>
    {routes.map(route => (
      <RouteItem route={route} />
    ))}
  </div>
);
