const { makeWebpackConfig } = require('webpack-simple');

module.exports = makeWebpackConfig({
  output: { filename: 'index.js', path: __dirname },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
