const { makeJestConfig } = require('jest-simple-config');

const config = makeJestConfig();

config.setupFilesAfterEnv = ['./src/__tests__/setup.js'];
config.collectCoverageFrom.push('!src/index.js');

module.exports = config;
