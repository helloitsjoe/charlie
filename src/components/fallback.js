import { h } from 'preact';
import { Footer } from './footer';

export const Fallback = ({ error }) => (
  <div style={{ textAlign: 'center', margin: '20px' }}>
    <h3 className="header">{error ? 'No data!' : 'Loading...'}</h3>
  </div>
);
