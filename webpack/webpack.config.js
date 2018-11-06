const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    app: '../src/index.js'
  },
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
        options: {
          presets: [ '@babel/env', '@babel/preset-react' ]
        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules/'),
      path.resolve(__dirname, '../src/')
    ],
    extensions: ['*', '.js', '.jsx', '.css']
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: '../src/index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};