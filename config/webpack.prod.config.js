const base = require('./webpack.base.config')
const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成动态title
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // 每次打包前清除dist文件,重新生成
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin') // 命令行提示
const DefinePlugin = require('webpack/lib/DefinePlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge.merge(base, {
  mode: 'development',
  target: 'web',
  // devtool: 'inline-source-map', // 追踪代码和给出错误代码出现的地方的提示
  plugins: [ new CleanWebpackPlugin() ],
})
