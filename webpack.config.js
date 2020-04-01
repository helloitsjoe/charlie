const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { makeWebpackConfig } = require('webpack-simple');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './index-template.html',
  filename: '../dist/index.html',
});

const client = makeWebpackConfig({
  plugins: [htmlPlugin, new webpack.HashedModuleIdsPlugin()],
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
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});

// TODO: Fix webpack-simple to remove invalid `module` option for sass-loader. Also require node-sass as a dep if requiring sass-loader
client.module.rules[1].use.pop();

const server = makeWebpackConfig({
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'index.js',
  },
  // resolve: {
  //   alias: {
  //     react: 'preact/compat',
  //     'react-dom': 'preact/compat',
  //   },
  // },
});

module.exports = [client, server];
