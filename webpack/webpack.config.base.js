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

  entry: 'index.tsx',

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.css', 'scss'],
  },

  output: {
    filename: 'tsb.[hash].js',
    chunkFilename: 'tsb.[name].js',
    path: paths.build,
    publicPath: paths.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=assets/fonts/[name].[ext]'
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          'image-webpack-loader',
        ],
      },
    ],
  },

  plugins: [
    // Generate minified HTML page from template with all CSS/JS imports.
    new HtmlWebpackPlugin({
      title: 'TSB',
      template: resolve(__dirname, '../public/index.html'),
    }),
  ],
});
