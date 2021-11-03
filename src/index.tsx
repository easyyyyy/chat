import React from 'react'
import ReactDOM from 'react-dom'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
import zhCN from 'antd/es/locale/zh_CN'

import App from './pages/App'
// import './index.css';
moment.locale('zh-cn')

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
