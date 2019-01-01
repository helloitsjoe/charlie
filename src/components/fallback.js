import { h } from 'preact';
import { Footer } from './footer';

export const Fallback = ({ color, error }) => (
  <center className={color}>
    <h3 className="header">{error ? 'No data!' : 'Loading...'}</h3>
    <Footer color={color} />
  </center>
);
