/* eslint-disable */
const paths = require('./paths');
const { merge }  = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
      path: paths.dist,
      publicPath: "/",
      filename: "assets/[name].[hash].js",
      chunkFilename: "assets/[name].[chunkhash].js"
    },
    resolve: {
      modules: [
        paths.appSrc,
        paths.appPublic,
        paths.appNodeModules
      ]
    },
    module: {
      rules: []
    },
    optimization:{
      splitChunks:{
        name: "vendor",
        minChunks: Infinity
      },
      minimize:true,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions:{
            warnings: false,
            output: {
              comments: false
            },
            ie8: false
          }
        })

      ]
    },
    performance:{
      hints: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: false,
        template: `${paths.appPublic}/index.html`,
      })
    ]
  });
