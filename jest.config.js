const { makeJestConfig } = require('jest-simple-config');

const config = makeJestConfig({ testEnvironment: 'jsdom' });

config.collectCoverageFrom.push('!src/index.js');
config.roots = ['<rootDir>/src'];
// Annoying
config.transformIgnorePatterns = ['node_modules/(?!(dom-debug)/)'];
config.moduleNameMapper = {
  '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
  //   '^react$': 'preact/compat',
  //   '^react-dom/test-utils$': 'preact/test-utils',
  //   '^react-dom$': 'preact/compat',
};

module.exports = config;
