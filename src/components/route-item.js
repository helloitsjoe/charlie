import { h, Component } from 'preact';
import { StopInfo } from './stop-info';
import { MinutesList } from './minutes-list';
import { TRANS_TIME } from '../constants';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  text-align: left;
  border-bottom: 1px solid #666;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const StopWrapper = styled.div`
  padding: 10px;
  flex: ${props => (props.clicked ? '0 0 13%' : '0 0 60%')};
  transition: ${TRANS_TIME};
`;

const MinsListWrapper = styled.div`
  flex: '0 0 auto';
  border-left: 1px solid #666;
  transition: ${TRANS_TIME};
`;

export class RouteItem extends Component {
  state = { clicked: false };

  handleClick = e => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    const {
      route: { color, textColor, stopName, direction, arrivalMins },
    } = this.props;
    const { clicked } = this.state;
    return (
      <RouteWrapper onClick={this.handleClick}>
        <StopWrapper clicked={clicked}>
          <StopInfo
            color={color}
            textColor={textColor}
            name={stopName}
            direction={direction}
            isCompact={clicked}
          />
        </StopWrapper>
        <MinsListWrapper>
          <MinutesList mins={arrivalMins} />
        </MinsListWrapper>
      </RouteWrapper>
    );
  }
}
