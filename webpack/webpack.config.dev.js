const webpack = require('webpack');
const { Config } = require('webpack-config');
const { join, resolve } = require('path');

const paths = {
  source: resolve(__dirname, '../src'),
  build: resolve(__dirname, '../build'),
  publicPath: '/',
};

module.exports = new Config().extend('./webpack/webpack.config.base.js').merge({
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'index.tsx'
  ],

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
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
        exclude: /node_modules/
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
