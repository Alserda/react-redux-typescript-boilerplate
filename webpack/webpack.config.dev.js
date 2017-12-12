const { join, resolve } = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '../src'),
  entry: [
    'react-hot-loader/patch',
    'index.tsx'
  ],

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.less', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      core: resolve(__dirname, '../src/services/core'),
      connection: resolve(__dirname, '../src/services/connection'),
    }
  },

  output: {
    filename: 'bundle.[hash].js',
    // the output bundle

    path: resolve(__dirname, '../dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    host: 'localhost',
    port: 9000,

    contentBase: resolve(__dirname, '../dist'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

    // fallback to root for other urls
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'react-hot-loader/webpack',
          'ts-loader',
        ],
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

    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
};
