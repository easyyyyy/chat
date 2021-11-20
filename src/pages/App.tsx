import * as React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ROUTER from './router'
import Login from './login/index'
import Register from './register/index'

const RouteWithSubRoutes: React.FC<any> = (route) => {
  return (
    <Route
      path={route.path}
      render={(props: any): any =>
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      }
    />
  )
}

const App: React.FC<any> = () =>
  <Router>
    <Switch>
      <Route
        path='/login'
        component={ Login }
      />
      <Redirect from="/" to="/login" exact />
      {ROUTER.map((route, i) =>
        <RouteWithSubRoutes key={i} {...route} />
      )}
    </Switch>
  </Router>

export default App
