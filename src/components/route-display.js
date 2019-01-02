import { h } from 'preact';
import { Stop } from './stop';
import { Minutes } from './minutes';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #666;
`;

const getColor = id => {
  const idAsNumber = Number(id);
  if (idAsNumber === idAsNumber) return 'yellow';
  if (/CR-/.test(id)) return 'purple';
  // Subway IDs are line colors
  return id.toLowerCase();
};

export const RouteDisplay = ({ route }) => {
  const id = route[0].relationships.route.data.id;
  // console.log('id', id);

  return (
    <RouteWrapper>
      {/* Name pill */}
      {/* To: direction */}
      <Stop color={getColor(id)} id={id} /* to={headSign}  */ />
      {/* Times */}
      {/* Expand times on click */}
      {/* Animation */}
      <Minutes /* mins={mins}  */ />
    </RouteWrapper>
  );
};
