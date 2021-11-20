import Login from './login/index'
import Register from './register/index'

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
]
export default ROUTER
