import { h } from 'preact';

export const Arrivals = ({ minsToArrival }) => {
  return (
    <div class={minsToArrival.length < 4 ? 'pad' : ''}>
      {minsToArrival.map(min => (
        <h2>
          <span class="bold">{min} </span>
          <span class="small">mins</span>
        </h2>
      ))}
    </div>
  );
};
