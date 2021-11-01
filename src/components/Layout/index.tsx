import React from 'react';
import { Menu, Layout, Breadcrumb, Avatar, Dropdown } from 'antd';
import { withRouter } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { ROUTER_MAP } from './routerMap'

import './index.scss'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

@(withRouter as any)
export default class Layouts extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      collapsed: false,
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
      headerText: []
    };
  }
  
  componentDidMount () {
    const token = sessionStorage.getItem('token')
    !token && this.props.history.push('/login')
    // eslint-disable-next-line no-console
    this.getHead(this.props)
  }

  componentDidUpdate (newprops: any) {
    const { location } = newprops
    const PATH_NAME = location.pathname
    const PATH_NAME_VAR = this.props.location.pathname
    if (PATH_NAME !== PATH_NAME_VAR) {
      this.getHead(newprops)
    }
  }

  getHead = (props: any) => {
    const { location } = props
    const PATH_NAME = location.pathname
    let headerText: string[] = []
    let defaultSelectedKeys: string[] = []
    ROUTER_MAP.map(i => {
      if (PATH_NAME === i.path) {
        headerText.push(i.title)
        defaultSelectedKeys.push(i.title)
      }
    })
    this.setState({
      headerText,
      defaultSelectedKeys
    })
  }

  jumpMenuItem = (path: string) => {
    return this.props.history.push(path);
  }

  gotoLogin = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')
    return this.props.history.push('/login');
  }

  renderMenus = (): any => {
    return (
      <>
        {
          ROUTER_MAP.map((i: any) => {
            const KEY = i.title
            return i.children
              ? <SubMenu key={ KEY } icon={<UserOutlined />} title={ i.title }>
                {this.renderChildMenu(i.children, KEY)}
              </SubMenu>
              :  (
                <Menu.Item key={ KEY } icon={i.icon || <UserOutlined />} onClick={ () => this.jumpMenuItem(i.path) }>
                  { i.title }
                </Menu.Item>
              )
          })
        }
      </>
    )
  }

  renderChildMenu = (child: any, partKey: string): any => {
    return child.map((i: any) => {
      const KEY = partKey + i.title
      return i.children
        ? <SubMenu key={ KEY } icon={<UserOutlined />} title={ i.title }>
          { this.renderChildMenu(i.children, KEY) }
        </SubMenu>
        :  (
          <Menu.Item key={ KEY } icon={i.icon || <UserOutlined />} onClick={ () => this.jumpMenuItem(i.path) }>
            { i.title }
          </Menu.Item>
        )
    })
  }

  render() {
    const { headerText, defaultSelectedKeys } = this.state
    const name = sessionStorage.getItem('name') || '游客'
    const menus = (
      <Menu>
        <Menu.Item danger onClick={ this.gotoLogin }>退出登录</Menu.Item>
      </Menu>
    );
    console.log('[ defaultSelectedKeys ]', defaultSelectedKeys)
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={ defaultSelectedKeys }>
            { this.renderMenus() }
          </Menu>
        </Sider>
        <Layout className='layout'>
          <Header className="site-layout-sub-header-background">
            <Breadcrumb>
            {
              headerText && Array.isArray(headerText) && headerText.length > 0 &&
              headerText.map(i => {
                return <Breadcrumb.Item key={ i }>{ i }</Breadcrumb.Item>
              })
            }
            </Breadcrumb>
            <Dropdown overlay={menus}>
              <div className='avatar-box'>
                <Avatar className='avatar' src='https://img2.baidu.com/it/u=325567737,3478266281&fm=26&fmt=auto&gp=0.jpg' />
                <span>hi, { name }</span>
              </div>
            </Dropdown>
          </Header>
          <Content className='content' id='content-root' style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, height: '100%' }}>
            {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}