const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, '../node_modules/'),
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules/'),
      path.resolve(__dirname, '../src/')
    ],
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    port: 3000
  }
};