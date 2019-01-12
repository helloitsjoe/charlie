import { h } from 'preact';
import { Footer } from './footer';

export const Fallback = ({ error }) => (
  <center>
    <h3 className="header">{error ? 'No data!' : 'Loading...'}</h3>
    <Footer />
  </center>
);
