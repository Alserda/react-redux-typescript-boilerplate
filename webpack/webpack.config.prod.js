const webpack = require('webpack');
const { Config } = require('webpack-config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = new Config().extend('./webpack/webpack.config.base.js').merge({
  devtool: 'source-map',

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "tsb.[contenthash].css",
      chunkFilename: "[id].css"
    }),

    // Probably change this url later
    new webpack.DefinePlugin({
      'BACKEND_URL': JSON.stringify('https://jsonplaceholder.typicode.com'),
    }),
  ]
});
