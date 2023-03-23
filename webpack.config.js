const { makeWebpackConfig } = require('webpack-simple');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({ template: 'index-template.html' });

const config = makeWebpackConfig({
  plugins: [htmlPlugin],
  output: {
    // filename: '[name].[contenthash:8].js',
    filename: '[name].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  // resolve: {
  //   alias: {
  //     react: 'preact/compat',
  //     'react-dom': 'preact/compat',
  //   },
  // },
});

console.log('config', config);

module.exports = config;
