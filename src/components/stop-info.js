import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TRANS_TIME } from '../constants';
import { wait } from '../utils';

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
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: '',
  };

  state = {
    showFullText: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;

    if (prevProps.isCompact) {
      wait(100).then(() => {
        this.setState({ showFullText: true });
      });
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
        <StyledColorPill
          data-enzyme-id="color-pill"
          color={color}
          isCompact={isCompact}
        >
          <StyledStopName data-enzyme-id="stop-name" textColor={textColor}>
            {showFullText ? cleanName : cleanName[0]}
          </StyledStopName>
        </StyledColorPill>
        <StyledDirection data-enzyme-id="direction" isCompact={!showFullText}>
          {`\u2794 ${direction}`}
        </StyledDirection>
      </div>
    );
  }
}
