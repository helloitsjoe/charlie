import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledError = styled.div`
  color: red;
  font-weight: 300;
  text-align: center;
  margin-top: 5px;
`;

export default function Error({ error }) {
  return (
    <StyledError>
      <h3 className="header">Error!</h3>
      <p>{error.message}</p>
      <pre>{error.stack}</pre>
      <p>Open devtools for more information</p>
    </StyledError>
  );
}

Error.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string, stack: PropTypes.string }),
};

Error.defaultProps = {
  error: null,
};
