// eslint-disable-next-line import/no-unresolved
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StopInfo from './stop-info';
import MinutesList from './minutes-list';
import { TRANS_TIME, GREEN, RED } from '../constants';

const RouteWrapper = styled.div`
  text-align: left;
  border-bottom: 1px solid #666;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const StopWrapper = styled.div`
  padding: 10px 15px;
  flex: ${(props) => (props.clicked ? '0 0 13%' : '0 0 60%')};
  transition: ${TRANS_TIME};
`;

const MinsListWrapper = styled.div`
  flex: '0 0 auto';
  width: 500px;
  border-bottom: 6px solid ${(props) => (props.isWalkable ? GREEN : RED)};
`;

export default function RouteItem({
  color,
  stopName,
  direction,
  textColor,
  customName,
  isWalkable,
  departMins,
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <RouteWrapper onClick={() => setClicked((c) => !c)}>
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
        <MinutesList clicked={clicked} mins={departMins} />
      </MinsListWrapper>
    </RouteWrapper>
  );
}

RouteItem.propTypes = {
  color: PropTypes.string,
  stopName: PropTypes.string,
  direction: PropTypes.string,
  textColor: PropTypes.string,
  customName: PropTypes.string,
  isWalkable: PropTypes.bool,
  departMins: PropTypes.arrayOf(PropTypes.number),
};

RouteItem.defaultProps = {
  color: '333',
  stopName: '',
  direction: '',
  textColor: null,
  customName: '',
  isWalkable: null,
  departMins: [],
};
