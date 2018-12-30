import { h } from 'preact';

export const Arrivals = ({ minsToArrival, route }) => {
  return minsToArrival.length ? (
    <div className={minsToArrival.length < 4 ? 'pad' : ''}>
      {minsToArrival.map(min => (
        <h2>
          <span className="bold">{min} </span>
          <span className="small">mins</span>
        </h2>
      ))}
    </div>
  ) : (
    <h3>No {route.mode}</h3>
  );
};
