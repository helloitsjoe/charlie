const MBTA = require('mbta-client');
const routesConfig = require('../resources/routes.config.js');
const routes = Object.values(routesConfig);
const mbta = new MBTA();

const PREDICTIONS_LIMIT = 4;
const ROUTE_HEIGHT = 90;
const HEADER_AND_FOOTER_HEIGHT = 90;

export const fetchData = async () => {
  const predictionPromises = Promise.all(
    routes.map(route =>
      mbta.fetchPredictions({
        // limit: PREDICTIONS_LIMIT,
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

    return predictions.map((pre, index) => {
      const arrivals = mbta.selectArrivals(pre, { convertTo: 'min' });
      const stopName = mbta.selectIncluded(pre, 'stop')[0].attributes.name;
      const routeAttrs = mbta.selectIncluded(pre, 'route')[0].attributes;
      const directionIdx = pre.data[0].attributes.direction_id;
      const direction =
        routeAttrs.direction_destinations[directionIdx] ||
        routeAttrs.direction_names[directionIdx];

      const color = routeAttrs.color;
      const textColor = routeAttrs.text_color;
      const arrivalMins = arrivals
        .filter(min => min > 2 && min < 60)
        .slice(0, PREDICTIONS_LIMIT);
      const _pastArrivalMins = arrivals.filter(min => min <= 2);

      const { waitStart, waitLength } = routes[index];
      const isWalkable = arrivals.some(
        mins => mins >= waitStart && mins <= waitStart + waitLength
      );

      return {
        color,
        stopName,
        direction,
        textColor,
        isWalkable,
        arrivalMins,
        // for debugging client side
        _pastArrivalMins,
        _prediction: pre,
      };
    });
  } catch (e) {
    console.error('Error during fetch:', e);
    const { message, stack } = e;
    return { error: { message, stack } };
  }
};
