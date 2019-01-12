import { h } from 'preact';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1rem;
  border-radius: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0px 20px;
  margin: 0px;
  color: #666;
`;

export const Header = ({ route, reFetch }) => {
  return (
    <div className="header">
      {/* <h4 className="short">Upcoming:</h4> */}
      {/* <h5 className="short light">Next {route.mode} in:</h5> */}
      <StyledButton onClick={reFetch}>REFRESH</StyledButton>
    </div>
  );
};
