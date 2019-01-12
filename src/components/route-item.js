import { h, Component } from 'preact';
import { StopInfo } from './stop-info';
import { MinutesList } from './minutes-list';
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
  transition: 0.3s;
`;

const MinsListWrapper = styled.div`
  border-left: 1px solid #666;
  flex: '0 0 auto';
  transition: 0.3s;
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
        {/* Name pill */}
        {/* To: direction */}
        <StopWrapper clicked={clicked}>
          <StopInfo
            color={color}
            textColor={textColor}
            name={stopName}
            direction={direction}
            isCompact={clicked}
          />
        </StopWrapper>
        {/* Times */}
        {/* Expand times on click */}
        {/* Animation */}
        <MinsListWrapper>
          <MinutesList mins={arrivalMins} />
        </MinsListWrapper>
      </RouteWrapper>
    );
  }
}
