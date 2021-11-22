import React, { useState, useEffect } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { Route } from 'react-router'
import ROUTER from './router'
import {
  UserContactOutline,
  MessageOutline,
  MessageFill,
  UserOutline,
} from 'antd-mobile-icons'
import styles from './index.scss'

const Main: React.FC<any> = (props: any) => {
  const tabs = [
    {
      key: 'message',
      title: '我的消息',
      icon: (active: boolean): any =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'contant',
      title: '通讯录',
      icon: <UserContactOutline />,
      badge: '5',
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  const [ activeKey, setActiveKey ] = useState('todo')
  return (
    <div className= {styles.layout}>
      <div className={styles.layout__main}>
        {ROUTER.map((route, i) =>
          <Route key={i} {...route} />
        )}
      </div>
      <div className={styles.layout__menu}>
        <TabBar>
          {tabs.map(item =>
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          )}
        </TabBar>
      </div>
    </div>
  )
}

export default Main
