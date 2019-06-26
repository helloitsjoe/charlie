import MBTA from 'mbta-client';
import routesConfig from '../resources/routes.config.json';
const enabledRoutes = Object.values(routesConfig.enabled);
let mbtaKey;
try {
  mbtaKey = require('../resources/credentials.json').mbtaKey;
} catch (err) {
  console.warn('Missing API key, making call without key...');
}

const PREDICTIONS_LIMIT = 4;

export const fetchData = ({
  routes = enabledRoutes,
  mbta = new MBTA(mbtaKey),
} = {}) => {
  // It would be better to send one request with a list of stops, but parsing
  // the response isn't feasible because data.relationships.stop.data.id
  // is sometimes different from route.stop
  const predictionPromises = Promise.all(
    routes.map(route =>
      mbta.fetchPredictions({
        stop: route.stop,
        direction_id: route.direction,
        sort: 'arrival_time',
        include: ['stop', 'route'],
      })
    )
  );

  return predictionPromises
    .then(predictions => {
      console.log(`Fetched live data`);

      const allPreds = predictions.map((rawPred, index) => {
        if (!rawPred) {
          throw new Error('No predictions');
        }
        const id = index;
        const currRoute = routes[index];
        const { waitStart, waitLength, route, morning, customName } = currRoute;
        const { selectArrivals, selectIncluded } = mbta;

        // TODO: Figure out some good defaults to fall back to,
        // in case of missing data/included info

        // Filter out other routes for the same stop
        const filteredData = rawPred.data.filter(
          ea => !route || ea.relationships.route.data.id === route.toString()
        );
        const pred = { data: filteredData };
        const arrivals = selectArrivals(pred, { convertTo: 'min' });
        const stopName = selectIncluded(rawPred, 'stop')[0].attributes.name;
        const routeAttrs = selectIncluded(rawPred, 'route')[0].attributes;
        const directionIdx =
          pred.data.length > 0 && pred.data[0].attributes.direction_id;

        // Either set direction as the destination or
        // generic Inbound/Outbound, or fall back to empty string
        const direction =
          routeAttrs.direction_destinations[directionIdx] ||
          routeAttrs.direction_names[directionIdx] ||
          '';

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
          id,
          color,
          morning,
          stopName,
          direction,
          textColor,
          isWalkable,
          customName,
          arrivalMins,
          // for debugging client side
          _pastArrivalMins,
          _predictions: rawPred,
          _filtered: pred,
        };
      });

      return {
        morning: allPreds.filter(pred => pred.morning),
        evening: allPreds.filter(pred => !pred.morning),
      };
    })
    .catch(e => {
      console.error('Error during fetch:', e);
      const { message, stack } = e;
      return { error: { message, stack } };
    });
};
