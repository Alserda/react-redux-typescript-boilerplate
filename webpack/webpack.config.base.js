const webpack = require('webpack');
const { Config } = require('webpack-config');
const { join, resolve } = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  source: resolve(__dirname, '../src'),
  build: resolve(__dirname, '../dist'),
  publicPath: '/',
};

module.exports = new Config().merge({
  context: paths.source,
  entry: 'index.tsx',

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.less', '.ts', '.tsx', '.js'],
  },

  output: {
    filename: 'bundle.[hash].js',
    path: paths.build,
    publicPath: paths.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          'image-webpack-loader',
        ],
      },
    ],
  },

  plugins: [
    // Generate minified HTML page from template with all CSS/JS imports.
    new HtmlWebpackPlugin({
      title: 'TS Boilerplate',
      template: resolve(__dirname, '../public/index.html'),
    }),
  ],
});
