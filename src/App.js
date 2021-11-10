import React from 'react';
import RegisterApp from './views/compRegister';
import LogApp from './views/compLog';
import ShowApp from './views/compPosts';
import NameApp from './views/compNameapp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'




const RouterScreen = () => {
  const alto = 1.75
  return (
    <>
      <NameApp />
      <Router>
        <Switch>
          <Route path="/" exact>

            <RegisterApp name="nani" age="22" altura={alto + 2} />
          </Route>
          <Route path="/login" exact>

            <LogApp />
          </Route>
          <Route path="/post" exact>

            <ShowApp />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default RouterScreen;
