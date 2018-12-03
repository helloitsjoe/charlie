const path = require('path');

module.exports = {
  // input
  entry: './renderer',

  // output
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    // library: '',
    // libraryTarget: 'commonjs2'
  },

  // transformations
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /(\.json|node_modules|main)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', { pragma: 'h' }]
            ]
            // plugins: [
            //   ['transform-react-jsx', { pragma: 'h' }],
            // ]
          }
        },
      }
    ]
  },

  // sourcemaps
  devtool: 'source-map',

  // node
  target: 'electron-main'
  
  // node: {
  //   fs: 'empty',
  //  
}
