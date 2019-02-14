const MBTA = require('mbta-client');
const routesConfig = require('../resources/routes.config.js');
const routes = Object.values(routesConfig);

let mbtaKey;
try {
  mbtaKey = require('../resources/credentials.json').mbtaKey;
} catch (err) {
  console.warn('Missing API key, making call without key...');
}

const mbta = new MBTA(mbtaKey);
const PREDICTIONS_LIMIT = 4;

export const fetchData = async () => {
  const predictionPromises = Promise.all(
    routes.map(route =>
      mbta.fetchPredictions({
        stop: route.code,
        direction_id: route.direction,
        sort: 'arrival_time',
        include: ['stop', 'route'],
      })
    )
  );

  try {
    const predictions = await predictionPromises;
    console.log(`Fetched live data`);

    return predictions
      .map((pred, index) => {
        const { waitStart, waitLength, route, morning } = routes[index];

        const stopDataByRoute = pred.data.filter(
          ea => !route || ea.relationships.route.data.id === route.toString()
        );
        const filteredPredictions = { data: stopDataByRoute };
        const arrivals = mbta.selectArrivals(pred, { convertTo: 'min' });
        const stopName = mbta.selectIncluded(pred, 'stop')[0].attributes.name;
        const routeAttrs = mbta.selectIncluded(pred, 'route')[0].attributes;
        const directionIdx = pred.data[0].attributes.direction_id;
        const direction =
          routeAttrs.direction_destinations[directionIdx] ||
          routeAttrs.direction_names[directionIdx];

        const color = routeAttrs.color;
        const textColor = routeAttrs.text_color;
        const arrivalMins = arrivals
          .filter(min => min >= 1 && min < 60)
          .slice(0, PREDICTIONS_LIMIT);
        const _pastArrivalMins = arrivals.filter(min => min <= 2);

        const isWalkable = arrivals.some(
          mins => mins >= waitStart && mins <= waitStart + waitLength
        );

        return {
          color,
          morning,
          stopName,
          direction,
          textColor,
          isWalkable,
          arrivalMins,
          // for debugging client side
          _pastArrivalMins,
          _prediction: pred,
        };
      })
      .sort((a, b) =>
        new Date().getHours() < 12
          ? !!b.morning - !!a.morning
          : !!a.morning - !!b.morning
      );
  } catch (e) {
    console.error('Error during fetch:', e);
    const { message, stack } = e;
    return { error: { message, stack } };
  }
};