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
      test: /\.json$/,
      loader: "json-loader"
    },
    {
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
