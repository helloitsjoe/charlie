const { makeWebpackConfig } = require('webpack-simple');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './index-template.html',
  filename: '../index.html',
});

module.exports = makeWebpackConfig({
  plugins: [htmlPlugin],
  output: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
