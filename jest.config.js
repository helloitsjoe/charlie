const {
  makeJestConfig,
  defaultCollectCoverageFrom,
} = require('jest-simple-config');

module.exports = makeJestConfig({
  setupFiles: ['./src/__tests__/setup.js'],
});
