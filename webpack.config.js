var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
          loader: ExtractTextPlugin.extract('font-family-unescape-loader!css-loader?sourceMap=false!sass-loader')
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
          loader: ExtractTextPlugin.extract('font-family-unescape-loader!css-loader?minimize!sass-loader')
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
  },
  {
    entry: {
      main: './src/js/main.js'
    },
    output: {
      path: path.join(__dirname, './static/js'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
      ]
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },
  },
  {
    devtool: 'source-map',
    entry: {
      main: './src/js/main.js',
    },
    output: {
      path: path.join(__dirname, './static/js'),
      filename: '[name].min.js'
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
      ]
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },
    plugins: [
      new UglifyJsPlugin()
    ],
  }
];