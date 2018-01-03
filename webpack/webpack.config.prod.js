const webpack = require('webpack');
const { Config } = require('webpack-config');

module.exports = new Config().extend('webpack/webpack.config.base.js').merge({
  devtool: 'source-map',
});
