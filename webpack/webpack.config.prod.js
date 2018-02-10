const webpack = require('webpack');
const { Config } = require('webpack-config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = new Config().extend('./webpack/webpack.config.base.js').merge({
  devtool: 'source-map',

  entry: 'index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    // Extracts the CSS from the JS bundle
    new ExtractTextPlugin({
      filename: 'boilerplate.[contenthash].css',
      allChunks: true,
    })
  ]
});
