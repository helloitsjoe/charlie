import React from 'react';
import PropTypes from 'prop-types';

export default function Fallback({ error }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      {error ? (
        <div>
          <h3 className="header">Error!</h3>
          <p style={{ color: 'red' }}>{error.message}</p>
          <pre style={{ color: 'red', textAlign: 'left' }}>{error.stack}</pre>
          <p style={{ fontWeight: 300 }}>Open devtools for more information</p>
        </div>
      ) : (
        <h3 className="header">Loading...</h3>
      )}
    </div>
  );
}

Fallback.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string, stack: PropTypes.string }),
};

Fallback.defaultProps = {
  error: null,
};
