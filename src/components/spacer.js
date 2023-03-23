// eslint-disable-next-line import/no-unresolved
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledSpacer = styled.div`
  height: 20px;
  line-height: 20px;
  background-color: #333;
  border-bottom: 1px solid #666;
  padding-left: 10px;
`;

export default function Spacer({ text }) {
  return <StyledSpacer data-testid="spacer">{text}</StyledSpacer>;
}

Spacer.propTypes = {
  text: PropTypes.string.isRequired,
};
