var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    tachyons: 'tachyons/css/tachyons.css'
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    new CopyWebpackPlugin([{ from: 'index.html' }])
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
