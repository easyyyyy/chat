import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
} from 'antd-mobile'
import cssExports from './index.scss'

const Register: React.FC<any> = (props: any) => {

  return (
    <div>
      <div>注册</div>
      <Form>
        <Form.Item>
          <Input placeholder='请输入用户名或邮箱' clearable/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='请输入密码' clearable type='password'/>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Register
