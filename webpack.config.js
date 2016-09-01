var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
