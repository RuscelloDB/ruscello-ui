import React, { Component } from 'react';
import {Route} from "react-router-dom"

// https://tylermcginnis.com/react-router-protected-routes-authentication/
// https://reacttraining.com/react-router/web/example/auth-workflow
export default class AuthenticatedRoute extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      this.props.redirectToLogin()
      return null
    }
    return <Route {...this.props} />
  }
}

// function PrivateRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//     />
//   )
// }
