/* eslint-disable */
const paths = require('./paths');

module.exports = {
  entry: {
    index: [`${paths.appSrc}/index.tsx`]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      paths.appSrc,
      paths.appPublic,
      paths.appNodeModules
    ]
  },
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[name].[chunkhash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  }
};