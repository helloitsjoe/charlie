import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    id,
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

  return (
    <RouteWrapper onClick={e => setClicked(c => !c)}>
      <StopWrapper clicked={clicked}>
        <StopInfo
          id="stop-info"
          color={color}
          textColor={textColor}
          name={customName || stopName}
          direction={direction}
          isCompact={clicked}
        />
      </StopWrapper>
      <MinsListWrapper isWalkable={isWalkable}>
        <MinutesList id="minutes-list" clicked={clicked} mins={arrivalMins} />
      </MinsListWrapper>
    </RouteWrapper>
  );
}

RouteItem.propTypes = {
  route: PropTypes.shape({
    color: PropTypes.string,
    stopName: PropTypes.string,
    direction: PropTypes.string,
    textColor: PropTypes.string,
    customName: PropTypes.string,
    isWalkable: PropTypes.bool,
    arrivalMins: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};
