import { h } from 'preact';

export const Title = ({ route }) => {
  return (
    <div className="header">
      <h4 className="short">{route.name.toUpperCase()}</h4>
      <h5 className="short light">Next {route.mode} in:</h5>
    </div>
  );
};