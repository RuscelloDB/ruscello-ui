import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import './Connect.css';

// TODO: add input for server...similar to cerebro and event store
// TODO: have select for known servers
class Connect extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
        </header>
        <form id="login" /*onSubmit={this.submit.bind(this)}*/>
              <p className="help-block">
                Enter your username and password.
              </p>
              <input
                id="username"
                type="text"
                name="username"
                //ref={node => this.usernameField = node}
                placeholder="Username"
                //size="24"
                //onChange={this.onUsernameChange.bind(this)}
                //value={this.state.username}
              />
              <br />
              <input
                id="password"
                type="password"
                name="password"
                //ref={node => this.passwordField = node}
                placeholder="Password"
                //size="24"
                //onChange={this.onPasswordChange.bind(this)}
                //value={this.state.password}
              />
              <br />
              <Button id="submit" variant="contained" color="primary">
                Connect
              </Button>
            </form>
      </div>
    );
  }
}

export default Connect;
