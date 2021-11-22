import * as React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ROUTER from './router'
import '@/assets/styles/base.css'

const App: React.FC<any> = () =>
  <Router>
    <Switch>
      <Redirect from="/" to="/login" exact />
      {ROUTER.map((route, i) =>
        <Route key={i} {...route} />
      )}
    </Switch>
  </Router>

export default App
