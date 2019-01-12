const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/.json?/, /node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { pragma: 'h' }],
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              ['transform-react-jsx', { pragma: 'h' }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      // // Not necessary unless you consume a module using `createClass`
      // 'create-react-class': 'preact-compat/lib/create-react-class',
      // // Not necessary unless you consume a module requiring `react-dom-factories`
      // 'react-dom-factories': 'preact-compat/lib/react-dom-factories',
    },
  },
};
