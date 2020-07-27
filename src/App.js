// eslint-disable-next-line

import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import Login from './views/login/Login'
import Admin from './views/admin/Admin'
import Home from './views/admin/childview/Home'
class App extends Component{

  render(){// component={Admin}
    return(
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/admin" exact component={Admin}></Route>
            {/* <Redirect to="/login"></Redirect> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;

