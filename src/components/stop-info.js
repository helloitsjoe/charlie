import { h } from 'preact';
import styled from 'styled-components';

const StyledColorPill = styled.div`
  height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: #${props => props.color};
`;

const StyledStopName = styled.h3`
  color: #${props => props.textColor};
  font-weight: bold;
`;

const StyledDirection = styled.div`
  color: white;
  margin: 10px 0px 0px 10px;
  font-weight: 300;
`;

export const StopInfo = ({ color, textColor, name, direction }) => {
  const cleanName = name.replace('Massachusetts Ave @ ', '');
  return (
    <div>
      <StyledColorPill color={color}>
        <StyledStopName textColor={textColor}>{cleanName}</StyledStopName>
      </StyledColorPill>
      <StyledDirection>Direction: {direction}</StyledDirection>
    </div>
  );
};
