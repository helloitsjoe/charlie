import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TRANS_TIME } from '../constants';

const MinutesListWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MinutesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  width: 60px;
  transition: color ${TRANS_TIME};
  color: ${({ clicked, idx }) => (clicked || idx === 0 ? '#FFF' : '#888')};
`;

const StyledMinutes = styled.div`
  display: inline-block;
  padding: 10px 0;
  font-size: ${(props) => (props.idx > 0 ? '2.5rem' : '3.5rem')};
`;

const StyledMinutesLabel = styled.div`
  font-size: ${(props) => (props.idx > 0 ? '1.25rem' : '1.5rem')};
`;

export default function MinutesList({ mins, clicked }) {
  return (
    <MinutesListWrapper data-testid="minutes-list">
      {mins.map((min, idx) => {
        return (
          <MinutesWrapper
            data-testid="minutes"
            // eslint-disable-next-line
            key={`${min}-${idx}`}
            clicked={clicked}
            idx={idx}
          >
            <StyledMinutes idx={idx}>{min}</StyledMinutes>
            <StyledMinutesLabel idx={idx}>min</StyledMinutesLabel>
          </MinutesWrapper>
        );
      })}
    </MinutesListWrapper>
  );
}

MinutesList.propTypes = {
  mins: PropTypes.arrayOf(PropTypes.number).isRequired,
  clicked: PropTypes.bool,
};

MinutesList.defaultProps = {
  clicked: false,
};
