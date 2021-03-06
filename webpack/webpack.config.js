const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
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
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, '../node_modules/')
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules/'),
      './src/'
    ],
    extensions: ['*', '.js', '.jsx', '.css', '.tsx', '.ts']
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
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};