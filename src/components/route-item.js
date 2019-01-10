import { h, Component } from 'preact';
import { StopInfo } from './stop-info';
import { Minutes } from './minutes';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #666;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const StopWrapper = styled.div`
  flex: ${props => (props.clicked ? '0 0 10%' : '0 0 70%')};
  transition: 0.3s;
`;

const MinsWrapper = styled.div`
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
            name={clicked ? stopName[0] : stopName}
            direction={!clicked && direction}
          />
        </StopWrapper>
        {/* Times */}
        {/* Expand times on click */}
        {/* Animation */}
        <MinsWrapper>
          <Minutes mins={clicked ? arrivalMins : arrivalMins.slice(0, 2)} />
        </MinsWrapper>
      </RouteWrapper>
    );
  }
}
