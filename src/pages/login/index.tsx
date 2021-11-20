import React, { useState, useEffect } from 'react'

import * as styles from './index.scss'

const Login: React.FC<any> = (props: any) => {
  useEffect(()=>{
    console.log(styles)
  }, [])

  return (
    <div className={styles.default.login}>
      登录
    </div>
  )
}
export default Login
