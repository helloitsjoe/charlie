import { h } from 'preact';
import styled from 'styled-components';

const MinutesWrapper = styled.div`
  display: inline;
`;

const StyledMinutes = styled.div`
  display: inline-block;
  padding: 10px;
  font-size: 3.5rem;
`;

export const Minutes = ({ mins }) => {
  // TODO: Make mins and 'min' line up vertically
  return (
    <div>
      {mins.map(min => (
        <MinutesWrapper>
          <StyledMinutes>{min}</StyledMinutes>
          <span>min</span>
        </MinutesWrapper>
      ))}
    </div>
  );
};
