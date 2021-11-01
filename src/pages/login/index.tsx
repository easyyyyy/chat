import React, { useState, useEffect } from 'react'

import { Form, Input, Button } from 'antd';

import './index.scss'
import { PropertySafetyTwoTone } from '@ant-design/icons';

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props: any) => {
  const [form] = Form.useForm();
  const [left, setLeft] = useState(false)

  const leftChange = () => {
    setLeft(!left) 
  }

  const onFinish = (values: any) => {
    sessionStorage.setItem('token', 'true')
    sessionStorage.setItem('name', values.username)
    props.history.push('/')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login'>
      <div className='login-form'>
        <div className= {left ?  'form-box to-right' : 'form-box to-left' }>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
              登录
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              重置
            </Button>
          </Form.Item>
        </Form>
        </div>
        <div className={ left ? 'img-box move-left' : 'img-box move-right' } onClick={ leftChange }>
        </div>
      </div>
    </div>
  )
}
export default Login