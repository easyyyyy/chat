import * as React from "react"
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Layout from "../components/Layout"
import ROUTER from "./router";
import Login from './login/index'

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default () => (
  <Router>
      <Switch>
        <Route
          path='/login'
          component={ Login }
        />
          <Layout>
            {/* <Redirect from="/" to="/welcome" exact /> */}
            {ROUTER.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Layout>
      </Switch>
  </Router>
);