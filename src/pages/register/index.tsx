import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd-mobile'
import cssExports from './index.scss'
import { register } from '@/config/api'

const Register: React.FC<any> = (props: any) => {
  const [ username, setUsername ] = useState()
  const [ email, setEmail ] = useState()
  const [ pwd, setPwd ] = useState()

  const handleUsernameChange = (e: any): void => {
    setUsername(e)
  }

  const handleEmailChange = (e: any): void => {
    setEmail(e)
  }

  const handlePwdChange = (e: any): void => {
    setPwd(e)
  }

  const handleRegister = async (): Promise<any> => {
    try {
      const params = {
        sendParams: {
          name: username,
          email: email,
          pwd,
        },
        queryParams: {},
      }
      const data = await register(params)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div>注册</div>
      <Form
        footer={
          <Button block type='submit' color='primary' onClick={ (e): void => {
            handleRegister()
          } }>
            登录
          </Button>
        }>
        <Form.Item>
          <Input placeholder='请取个名字' clearable value={ username } onChange={ (v): void => {
            handleUsernameChange(v)
          } }/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='请填写邮箱' clearable value={ email } onChange={ (v): void => {
            handleEmailChange(v)
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
export default Register
