import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ error }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '5px' }}>
      <h3 className="header">Error!</h3>
      <p style={{ color: 'red' }}>{error.message}</p>
      <pre style={{ color: 'red', textAlign: 'left' }}>{error.stack}</pre>
      <p style={{ fontWeight: 300 }}>Open devtools for more information</p>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string, stack: PropTypes.string }),
};

Error.defaultProps = {
  error: null,
};
