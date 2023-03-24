/* eslint-disable camelcase */
/* eslint-disable function-paren-newline */
import MBTA from 'mbta-client';
import routesConfig from '../resources/routes.config.json';

const enabledRoutes = Object.values(routesConfig.enabled);
let mbtaKey;
try {
  // eslint-disable-next-line
  ({ mbtaKey } = require('../resources/credentials.json'));
} catch (err) {
  console.warn('Missing API key, making call without key...');
}

const PREDICTIONS_LIMIT = 4;

const fetchData = ({
  routes = enabledRoutes,
  mbta = new MBTA(mbtaKey),
} = {}) => {
  // It would be better to send one request with a list of stops, but parsing
  // the response isn't feasible because data.relationships.stop.data.id
  // is sometimes different from route.stop
  const predictionPromises = Promise.all(
    routes.map((route) =>
      mbta.fetchPredictions({
        stop: route.stop,
        direction_id: route.direction,
        sort: 'departure_time',
        include: ['stop', 'route'],
      })
    )
  );

  return predictionPromises
    .then((predictions) => {
      console.log(`Fetched live data`);

      const allPreds = predictions.map((rawPred, i) => {
        if (!rawPred) {
          throw new Error('No predictions');
        }

        const { waitStart, waitLength, route, morning, customName } = routes[i];
        const { selectDepartures, selectIncluded } = mbta;

        // TODO: Figure out some good defaults to fall back to,
        // in case of missing data/included info

        // Filter out other routes for the same stop
        const routeData = rawPred.data.filter(
          (ea) => !route || ea.relationships.route.data.id === route.toString()
        );
        const pred = { data: routeData };
        // const arrivals = selectArrivals(pred, { convertTo: 'min' });
        const departures = selectDepartures(pred, { convertTo: 'min' });
        const includedStop = selectIncluded(rawPred, 'stop');
        const includedRoute = selectIncluded(rawPred, 'route');

        if (!includedStop.length || !includedRoute.length) {
          return routes[i];
        }

        const stopName = includedStop[0].attributes.name;
        const routeAttrs = includedRoute[0].attributes;
        const directionIdx =
          routeData.length > 0 && routeData[0].attributes.direction_id;

        const {
          direction_destinations: dirDestinations,
          direction_names: dirNames,
          color,
          text_color: textColor,
        } = routeAttrs;

        // Either set direction as the destination or
        // generic Inbound/Outbound, or fall back to empty string
        const direction =
          dirDestinations[directionIdx] || dirNames[directionIdx] || '';

        const departMins = departures
          .filter((min) => min >= 1 && min < 60)
          .slice(0, PREDICTIONS_LIMIT);

        const isWalkable = departMins.some(
          (mins) => mins >= waitStart && mins <= waitStart + waitLength
        );

        const id = i;

        return {
          id,
          color,
          morning,
          stopName,
          direction,
          textColor,
          isWalkable,
          customName,
          departMins,
          // for debugging client side
          _pastDepartMins: departures.filter((min) => min <= 2),
          _predictions: rawPred,
          _filtered: routeData,
        };
      });

      return allPreds;
    })
    .catch((e) => {
      console.error('Error during fetch:', e);
      const { message, stack } = e;
      return { error: { message, stack } };
    });
};

export default fetchData;
