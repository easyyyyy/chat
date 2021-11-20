const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成动态title
//const {CleanWebpackPlugin} = require('clean-webpack-plugin') // 每次打包前清除dist文件,重新生成
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin') // 命令行提示
const DefinePlugin = require('webpack/lib/DefinePlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const entries = {
  main: './src/index.tsx',
}

const output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'js/[name].bundle.js',
  chunkFilename: 'js/[name].[chunkhash].bundle.js',
  // 打包生成的 index.html 文件里面引用资源的前缀
  // 也为发布到线上资源的 URL 前缀
  // 使用的是相对路径，默认为 ''
  publicPath: '/',
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
          presets: [ '@babel/preset-env', '@babel/preset-react' ],
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
    {
      // 问题：默认处理不了html中img图片
      // 处理图片资源
      test: /\.(jpg|png|gif|svg)$/,
      // 使用一个loader
      // 下载 url-loader file-loader
      loader: 'url-loader',
      options: {
        // 图片大小小于8kb，就会被base64处理
        // 优点: 减少请求数量（减轻服务器压力）
        // 缺点：图片体积会更大（文件请求速度更慢）
        limit: 8 * 1024,
        // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
        // 解析时会出问题：[object Module]
        // 解决：关闭url-loader的es6模块化，使用commonjs解析
        esModule: false,
        // 给图片进行重命名
        // [hash:10]取图片的hash的前10位
        // [ext]取文件原来扩展名
        name: 'assets/images/[hash:10].[ext]',
      },
    },
    // // Fonts and SVGs
    // CSS, PostCSS, and Sass
    {
      test: /\.(css)$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        }, 'postcss-loader',
      ],
    },
    {
      test: /\.scss$/,
      use: [
        // MiniCssExtractPlugin.loader,
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        },
        'css-modules-typescript-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[local]---[hash:base64:5]',
          },
        },
        'sass-loader',
      ],
    },
  ],
}

const plugins = [
  new HtmlWebpackPlugin({
    title: 'chat',
    template: path.resolve(__dirname, '../src/index.html'),
    filename: 'index.html',
  }),
  new FriendlyErrorsWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(), // 热更新插件
  new ProgressBarPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[hash].css',
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
  extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
}

module.exports = {
  mode: 'development',
  target: 'web',
  entry: entries,
  output,
  optimization,
  module: modules,
  plugins,
  resolve,
  devtool: 'inline-source-map', // 追踪代码和给出错误代码出现的地方的提示
}
