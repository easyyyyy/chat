import Login from './login/index'
import Register from './register/index'
import Main from './main/index'

const ROUTER = [
  {
    path: '/login',
    component: Login,
    title: '登录',
  },
  {
    path: '/register',
    component: Register,
    title: '注册',
  },
  {
    path: '/main',
    component: Main,
    title: '主页',
  },
]
export default ROUTER
