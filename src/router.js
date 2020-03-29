import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Login from './Components/Pages/Login';
import Dashboard from './Components/Admin/Dashboard';
import User from './Components/Admin/User';
import List from './Components/Admin/List';

class Ember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      currentIndex: '',
    };
  }

  render() {
    return (
      <Router basename="/">
        <Suspense fallback={<div className="loader" />}>
          <Switch>
          <Route exact path="/" component={Login} currentIndex='/' />
          <Route exact path="/admin/" component={Dashboard} />
          <Route exact path="/admin/user" component={User} />
          <Route exact path="/admin/list" component={List} />
          </Switch>
        </Suspense>
      </Router>
    )
  }

}


export default Ember;