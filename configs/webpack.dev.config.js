/* eslint-disable */
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    publicPath: '/',
    inline: true,
    hot: false,
    historyApiFallback: true,
    disableHostCheck: true
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: `${paths.appPublic}/index.html`
    })
  ]
});
