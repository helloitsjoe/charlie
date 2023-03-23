const { makeJestConfig } = require('jest-simple-config');

const config = makeJestConfig({ testEnvironment: 'jsdom' });

config.collectCoverageFrom.push('!src/index.js');
// config.moduleNameMapper = {
//   '^react$': 'preact/compat',
//   '^react-dom/test-utils$': 'preact/test-utils',
//   '^react-dom$': 'preact/compat',
// };

module.exports = config;
