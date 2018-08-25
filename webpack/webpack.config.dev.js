const webpack = require('webpack');
const { Config } = require('webpack-config');
const { join, resolve } = require('path');

const paths = {
  source: resolve(__dirname, '../src'),
  build: resolve(__dirname, '../build'),
  publicPath: '/',
};

module.exports = new Config().extend('./webpack/webpack.config.base.js').merge({
  // Recommended by React, so there won't be 'cross origin errors'
  // See https://reactjs.org/docs/cross-origin-errors.html#source-maps
  devtool: 'cheap-module-source-map',

  mode: 'development',

  devServer: {
    // enable HMR on the server
    hot: true,

    host: 'localhost',
    port: 9000,

    // match the output path
    contentBase: paths.build,

    // match the output `publicPath`
    publicPath: paths.publicPath,

    // fallback to root for other urls
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'BACKEND_URL': JSON.stringify('https://jsonplaceholder.typicode.com'),
    }),
  ],
});
