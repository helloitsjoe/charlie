const { makeWebpackConfig } = require('webpack-simple');

module.exports = makeWebpackConfig({
  output: { filename: 'index.js', path: __dirname },
});
