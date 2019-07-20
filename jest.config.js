const { makeJestConfig } = require('jest-simple-config');

module.exports = makeJestConfig({
  setupFilesAfterEnv: ['./src/__tests__/setup.js'],
});
