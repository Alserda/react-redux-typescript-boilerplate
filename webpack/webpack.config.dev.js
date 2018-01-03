const webpack = require('webpack');
const { Config } = require('webpack-config');
const { join, resolve } = require('path');

const paths = {
  source: resolve(__dirname, '../src'),
  build: resolve(__dirname, '../build'),
  publicPath: '/',
};

module.exports = new Config().extend({
  './webpack/webpack.config.base.js': function(config) {
    delete config.entry;
    config.module.rules.shift();
    return config;
  }
}).merge({
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'index.tsx'
  ],

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

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
      },
    ]
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
});
