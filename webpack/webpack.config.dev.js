const webpack = require('webpack');
const { Config } = require('webpack-config');
const { join, resolve } = require('path');

const paths = {
  source: resolve(__dirname, '../src'),
  build: resolve(__dirname, '../build'),
  publicPath: '/',
};


module.exports = new Config().extend('webpack/webpack.config.base.js').merge({
  entry: [
    'react-hot-loader/patch',
    'index.tsx'
  ],

  output: {
    // necessary for HMR to know where to load the hot update chunks
    publicPath: paths.publicPath,
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
      },
    ]
  },

  devServer: {
    hot: true,
    // enable HMR on the server

    host: 'localhost',
    port: 9000,

    contentBase: paths.build,
    // match the output path

    publicPath: paths.publicPath,
    // match the output `publicPath`

    // fallback to root for other urls
    historyApiFallback: true
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
});
