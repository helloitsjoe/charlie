import { h } from 'preact';
import styled from 'styled-components';

const StyledColorPill = styled.div`
  height: 40px;
  text-align: center;
  border-radius: 20px;
  color: ${props => (props.color === 'yellow' ? 'black' : 'white')}
  background-color: ${props => props.color};
`;

const StyledStopName = styled.h3`
  font-weight: bold;
`;

const StyledDirection = styled.div`
  color: white;
  margin: 10px 0px 0px 10px;
  font-weight: 300;
`;

export const Stop = ({ color, id, headSign }) => {
  console.log(`color`, color);
  return (
    <div>
      <StyledColorPill color={color}>
        <StyledStopName>{id}</StyledStopName>
      </StyledColorPill>
      <StyledDirection>Towards Alewife</StyledDirection>
    </div>
  );
};
