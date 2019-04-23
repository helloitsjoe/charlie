import React from 'react';
import { Footer } from './footer';

export const Fallback = ({ error }) => (
  <div style={{ textAlign: 'center', margin: '20px' }}>
    {error ? (
      <div>
        <h3 className="header">Error!</h3>
        <p style={{ fontWeight: 300 }}>Open devtools for more information</p>
      </div>
    ) : (
      <h3 className="header">Loading...</h3>
    )}
  </div>
);
