import { h } from 'preact';

export const Title = ({ route }) => {
  return (
    <div class="header">
      <h4 class="short">{route.name.toUpperCase()}</h4>
      <h5 class="short light">Next {route.mode} in:</h5>
    </div>
  );
};
