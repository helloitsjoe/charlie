import { h, Component } from 'preact';
import styled from 'styled-components';
import { TRANS_TIME } from '../constants';

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

export class StopInfo extends Component {
  state = {
    showFullText: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;

    if (prevProps.isCompact) {
      setTimeout(() => {
        this.setState({ showFullText: true });
      }, 100);
    } else {
      this.setState({ showFullText: !this.props.isCompact });
    }
  }

  render() {
    const { showFullText } = this.state;
    const { color, textColor, name, direction, isCompact } = this.props;
    const [first, second] = name.split('@');
    const cleanName = second ? second.trim() : first.trim();
    return (
      <div>
        <StyledColorPill color={color} isCompact={isCompact}>
          <StyledStopName textColor={textColor}>
            {showFullText ? cleanName : cleanName[0]}
          </StyledStopName>
        </StyledColorPill>
        <StyledDirection isCompact={!showFullText}>
          {`\u2794 ${direction}`}
        </StyledDirection>
      </div>
    );
  }
}
