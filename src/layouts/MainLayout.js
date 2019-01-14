import React, { Component } from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";
// import Users from '../features/users/index'
// import NewUser from '../features/users/new-user'
// import ResetPassword from '../features/users/reset-password'
// import Streams from '../features/streams/index'
// import Dashboard from '../features/dashboard/index'
// import Admin from '../features/admin/index'
import PageNotFound from '../containers/PageNotFound';
import logo from '../logo.svg';
import Footer from '../components/Footer'
import '../App.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>Links</p>
          <ul>
            <li><Link to="/users/">Users</Link></li>
            <li><Link to="/users/new">New User</Link></li>
            <li><Link to="/users/sean/reset-password">User Reset Password</Link></li>
            <li><Link to="/streams/">Streams</Link></li>
            <li><Link to="/dashboard/">Dashboard</Link></li>
            <li><Link to="/admin/">Admin</Link></li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/users" component={Users} />
          <Route path="/users/new" component={NewUser} />
          <Route path="/users/:user/reset-password" component={ResetPassword} />
          <Route path="/streams/" component={Streams} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default MainLayout;
