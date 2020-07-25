/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpackBase = require('./webpack.config.base')

module.exports = merge(webpackBase, {
  mode: 'development',
  plugins: [
    // this plugin is checking and reporting problems with typescript types. Without it,
    // webpack will not report errors, if compilation is correct. If we don't use {transpileOnly: true}
    // webpack will check types differently and therefore would take more time.
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
    // show system notification while typescript has checked types correctly or not.
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      alwaysNotify: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'warning',
    open: true,
    port: 3000,
    historyApiFallback: true,
    stats: 'errors-only',
  },
})
