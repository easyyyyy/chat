const path = require('path');
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成动态title
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // 每次打包前清除dist文件,重新生成
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 命令行提示
const DefinePlugin = require("webpack/lib/DefinePlugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const entries = {
  main: './src/index.js'
}

const output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'js/[name].bundle.js',
  chunkFilename: 'js/[name].[chunkhash].bundle.js',
  // 打包生成的 index.html 文件里面引用资源的前缀
  // 也为发布到线上资源的 URL 前缀
  // 使用的是相对路径，默认为 ''
  publicPath: '/'
}

const modules = {
  rules: [
    // 引入 babel, 进行文件的转换编译,其中包括: js css 静态资源 es6转义为浏览器可编译文件(bable-cro) 
    // JavaScript
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    // tsx 配置
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    //  // Images
    //  {
    //   test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    //   type: 'asset/resource',
    // },
    // // Fonts and SVGs
    // {
    //   test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    //   type: 'asset/inline',
    // },
    // CSS, PostCSS, and Sass
    {
      test: /\.(css)$/,
      use: ['style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      }, 'postcss-loader'],
    },
    {
      test: /\.scss$/,
      use: [
        // MiniCssExtractPlugin.loader,
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}

const plugins = [
  new HtmlWebpackPlugin({
    title: '写着玩',
    template: path.resolve(__dirname, '../src/index.html'),
    filename: 'index.html',
  }),
  new CleanWebpackPlugin(),
  new FriendlyErrorsWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),  // 热更新插件
  new ProgressBarPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].[hash].css",
    chunkFilename: 'css/[id].[hash].css',
  }),
  // new DefinePlugin({
  //   /* eslint-disable no-undef */
  //   SOMETHINE: 'This is something we needed.',
  //   API_URL: JSON.stringify(API_URL)
  // }),
  // new CopyWebpackPlugin({
  //   patterns: [{
  //     from: path.resolve(__dirname, "../public"), //打包的静态资源目录地址
  //     to: path.resolve(__dirname, "../dist/public") //打包到build下面的public
  //   }]
  // }),
]

const optimization = {}

const resolve = {
  alias: {
    '@': path.resolve(__dirname, './src'),
    'config': path.resolve(__dirname, './config'),
  },
  extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
}

module.exports = {
  entries,
  output,
  modules,
  plugins,
  optimization,
  resolve,
}