import { h } from 'preact';
import { StopInfo } from './stop-info';
import { Minutes } from './minutes';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #666;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const StopWrapper = styled.div`
  flex: 0 0 70%;
`;

const MinsWrapper = styled.div`
  flex: 0 0 auto;
`;
// const StopWrapper = styled.div`
//   display: inline-block;
//   width: 80%;
// `;

// const MinsWrapper = styled.div`
//   display: inline-block;
//   overflow: hidden;
//   width: 20%;
// `;

const getColor = id => {
  const idAsNumber = Number(id);
  if (idAsNumber === idAsNumber) return 'yellow';
  if (/CR-/.test(id)) return 'purple';
  // Subway IDs are line colors
  return id.toLowerCase();
};

export const RouteItem = ({ route }) => {
  console.log(`route:`, route);
  // const id = route.relationships.route.data.id;
  // console.log('id', id);

  return (
    <RouteWrapper>
      {/* Name pill */}
      {/* To: direction */}
      <StopWrapper>
        <StopInfo
          color={route.color}
          textColor={route.textColor}
          name={route.stopName}
          direction={route.direction}
        />
      </StopWrapper>
      {/* Times */}
      {/* Expand times on click */}
      {/* Animation */}
      <MinsWrapper>
        <Minutes mins={route.arrivalMins} />
      </MinsWrapper>
    </RouteWrapper>
  );
};
