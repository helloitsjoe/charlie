import { h } from 'preact';
import styled from 'styled-components';

const MinutesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  width: 60px;
`;

const StyledMinutes = styled.div`
  display: inline-block;
  padding: 10px 0;
  font-size: ${props => (props.idx > 0 ? '2.5rem' : '3.5rem')};
`;

const StyledMinutesLabel = styled.div`
  font-size: ${props => (props.idx > 0 ? '1.25rem' : '1.5rem')};
`;

export const MinutesList = ({ mins }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      {mins.map((min, idx) => (
        <MinutesWrapper>
          <StyledMinutes idx={idx}>{min}</StyledMinutes>
          <StyledMinutesLabel idx={idx}>min</StyledMinutesLabel>
        </MinutesWrapper>
      ))}
    </div>
  );
};
