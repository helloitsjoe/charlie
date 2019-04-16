import React from 'react';

import styled from 'styled-components';

const StyledSpacer = styled.div`
  height: 8px;
  background-color: #444;
  border-bottom: 1px solid #666;
`;

export const Spacer = () => <StyledSpacer />;
