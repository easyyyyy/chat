import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd-mobile'
import cssExports from './index.scss'
import { login } from '@api/index'

const Login: React.FC<any> = (props: any) => {
  const [ username, setUsername ] = useState()
  const [ pwd, setPwd ] = useState()

  const handleUsernameChange = (e: any): void => {
    setUsername(e)
  }

  const handlePwdChange = (e: any): void => {
    setPwd(e)
  }

  const handleLogin = async (): Promise<any> => {
    try {
      const params = {
        sendParams: {
          data: username,
          pwd,
        },
        queryParams: {},
      }
      const data = await login(params)
      console.log(data.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div>登录</div>
      <Form
        footer={
          <Button block type='submit' color='primary' onClick={ (e): void => {
            handleLogin()
          } }>
            登录
          </Button>
        }
      >
        <Form.Item>
          <Input placeholder='请输入用户名或邮箱' clearable value={ username } onChange={ (v): void => {
            handleUsernameChange(v)
          } }/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='请输入密码' clearable type='password' value={ pwd } onChange={ (v): void => {
            handlePwdChange(v)
          } }/>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
