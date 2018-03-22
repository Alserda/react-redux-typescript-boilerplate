const webpack = require('webpack');
const { Config } = require('webpack-config');
const { join, resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  source: resolve(__dirname, '../src'),
  build: resolve(__dirname, '../dist'),
  publicPath: '/',
};


module.exports = new Config().merge({
  context: paths.source,

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.less', '.ts', '.tsx', '.js'],
  },

  output: {
    filename: 'boilerplate.[hash].js',
    chunkFilename: 'boilerplate.[name].js',
    path: paths.build,
    publicPath: paths.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
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
