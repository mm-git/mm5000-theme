var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      style: './src/css/style.scss'
    },
    output: {
      path: path.join(__dirname, './static/css'),
      filename: '[name].css'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader?sourceMap=false!sass-loader')
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'file-loader?name=../fonts/[name].[ext]'
        },
        {
          test: /\.png$/,
          loader: 'file-loader?name=../image/[name].[ext]'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  },
  {
    devtool: 'source-map',
    entry: {
      style: './src/css/style.scss',
    },
    output: {
      path: path.join(__dirname, './static/css'),
      filename: '[name].min.css'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader?minimize!sass-loader')
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'file-loader?name=../fonts/[name].[ext]'
        },
        {
          test: /\.png$/,
          loader: 'file-loader?name=../image/[name].[ext]'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].min.css')
    ]
  }
];