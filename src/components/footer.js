/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDebug = styled.div`
  color: #444;
  padding: 20px;
  text-align: center;
`;

export default function Footer({ hourOfDay }) {
  const [debug, setDebug] = useState(false);

  let timeout;

  const handlePress = () => {
    timeout = setTimeout(() => {
      setDebug(d => !d);
    }, 1000);
  };

  const handleRelease = () => {
    clearTimeout(timeout);
  };

  return (
    hourOfDay && (
      <StyledDebug
        onTouchStart={handlePress}
        onTouchEnd={handleRelease}
        onMouseDown={handlePress}
        onMouseUp={handleRelease}
      >
        {hourOfDay}
      </StyledDebug>
    )
  );
}

Footer.propTypes = {
  hourOfDay: PropTypes.number,
};

Footer.defaultProps = {
  hourOfDay: null,
};
