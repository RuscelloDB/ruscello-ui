import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connect from './Connect'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import { store, history } from './configureStore';
import PageNotFound from './containers/not_found';

// TODO: conditional routes?
// https://alligator.io/react/simple-authorization/
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => (<App />)} />
          <Route exact path="/connect" render={() => (<Connect />)} />
          <Route render={() => (<PageNotFound />)} />
        </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
