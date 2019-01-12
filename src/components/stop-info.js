import { h, Component } from 'preact';
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledDirection = styled.div`
  color: white;
  padding: 10px 0px 0px 10px;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: ${props => props.isCompact && '0'};
`;

export class StopInfo extends Component {
  state = {
    showFullText: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;

    if (prevProps.isCompact) {
      setTimeout(() => {
        this.setState({ showFullText: true });
      }, 85);
    } else {
      this.setState({ showFullText: !this.props.isCompact });
    }
  }

  render() {
    const { showFullText } = this.state;
    const { color, textColor, name, direction, isCompact } = this.props;
    const cleanName = name && name.replace('Massachusetts Ave @ ', '');
    return (
      <div>
        <StyledColorPill color={color}>
          <StyledStopName textColor={textColor}>
            {showFullText ? cleanName : cleanName[0]}
          </StyledStopName>
        </StyledColorPill>
        <StyledDirection isCompact={!showFullText}>
          Direction: {direction}
        </StyledDirection>
      </div>
    );
  }
}
