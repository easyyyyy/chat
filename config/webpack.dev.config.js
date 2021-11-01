const {
  entries,
  output,
  modules,
  plugins,
  optimization,
  resolve,
} = require('./webpack.base.config')
const path = require('path');

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
  devServer: { // 开发环境热更新
    historyApiFallback: true, // 路由匹配,没有找到路由就显示入口文件
    //contentBase: path.join(__dirname, './dist'),
    open: true,
    // noInfo: true,
    hot: true,
    // quiet: true, // 避免不必要的信息打印在控制台
    port: 8082, // 端口号
    // inline: true, // 实时刷新
    // liveReload: false, // 重新加载/刷新页面
    // publicPath: '/', // 公共路径 打包后资源可以访问的路径
  },
}