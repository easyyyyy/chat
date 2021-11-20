import React from 'react'
import ReactDOM from 'react-dom'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文

import App from './pages/App'
// import './index.css';

// 计算根节点字体大小
(function(): void {
  const html = document.querySelector('html')
  const width = html?.clientWidth || 375
  const fontSize = 50 / 375 * width
  console.log(width)
  html && (html.style.fontSize = `${fontSize}px`)
})()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
