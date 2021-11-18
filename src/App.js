import React from 'react';
import RegisterApp from './views/compRegister';
import LogApp from './views/compLog';
import ShowApp from './views/compPosts';
import NameApp from './views/compNameapp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';




const RouterScreen = () => {
  return (
    <>
      <Router>
      <NameApp />
        <Switch>
          <Route path="/" exact>
            <RegisterApp/>
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
