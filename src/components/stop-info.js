import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TRANS_TIME } from '../constants';
import { wait } from '../utils';

const StyledColorPill = styled.div`
  height: 40px;
  text-align: center;
  border-radius: 20px;
  width: ${props => (props.isCompact ? '40px' : '100%')};
  margin-left: ${props => (props.isCompact ? '6px' : '0')};
  background-color: #${props => props.color};
  transition: ${TRANS_TIME};
`;

const StyledStopName = styled.h3`
  color: #${props => props.textColor};
  font-size: 200%;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledDirection = styled.div`
  color: #999;
  padding: 10px 0px 0px 10px;
  font-weight: 300;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: ${props => props.isCompact && '40px'};
  opacity: ${props => (props.isCompact ? '0' : '1')};
  transition: opacity ${TRANS_TIME};
`;

export function StopInfo({ color, textColor, name, direction, isCompact }) {
  const [showFullText, setShowFullText] = useState(true);

  useEffect(
    () => {
      if (isCompact) return setShowFullText(false);

      wait(100).then(() => setShowFullText(true));
    },
    [isCompact]
  );

  const [first, second] = name.split('@');
  const cleanName = second ? second.trim() : first.trim();
  return (
    <div>
      <StyledColorPill
        data-enzyme-id="color-pill"
        color={color}
        isCompact={isCompact}
      >
        <StyledStopName data-enzyme-id="stop-name" textColor={textColor}>
          {showFullText ? cleanName : cleanName[0]}
        </StyledStopName>
      </StyledColorPill>
      <StyledDirection data-enzyme-id="direction" isCompact={!showFullText}>
        {`\u2794 ${direction}`}
      </StyledDirection>
    </div>
  );
}

StopInfo.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  direction: PropTypes.string,
  isCompact: PropTypes.bool,
};

StopInfo.defaultProps = {
  name: '',
  color: '',
  textColor: '',
  direction: '',
  isCompact: false,
};
