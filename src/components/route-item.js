import React, { useState } from 'react';
import { StopInfo } from './stop-info';
import { MinutesList } from './minutes-list';
import { TRANS_TIME, GREEN, RED } from '../constants';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  text-align: left;
  border-bottom: 1px solid #666;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const StopWrapper = styled.div`
  padding: 10px 15px;
  flex: ${props => (props.clicked ? '0 0 13%' : '0 0 60%')};
  transition: ${TRANS_TIME};
`;

const MinsListWrapper = styled.div`
  flex: '0 0 auto';
  width: 500px;
  border-bottom: 6px solid ${props => (props.isWalkable ? GREEN : RED)};
`;

export function RouteItem({
  route: {
    color,
    stopName,
    direction,
    textColor,
    customName,
    isWalkable,
    arrivalMins,
  },
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <RouteWrapper onClick={handleClick}>
      <StopWrapper clicked={clicked}>
        <StopInfo
          color={color}
          textColor={textColor}
          name={customName || stopName}
          direction={direction}
          isCompact={clicked}
        />
      </StopWrapper>
      <MinsListWrapper isWalkable={isWalkable}>
        <MinutesList clicked={clicked} mins={arrivalMins} />
      </MinsListWrapper>
    </RouteWrapper>
  );
}
