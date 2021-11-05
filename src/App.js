import React from 'react';
import RegisterApp from './views/compRegister';
import LogApp from './views/compLog';
import ShowApp from './views/compPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const RouterScreen = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <RegisterApp />
          </Route>
          <Route path="/login">
            <LogApp />
          </Route>
          <Route path="/posts">
            <ShowApp />
          </Route>
        </Switch>
      </Router>
    </div>
 )
}
export default RouterScreen;
