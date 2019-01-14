import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import rootReducer from './rootReducer'

export const history = createBrowserHistory()

export const store = createStore(
  createRootReducer(history), // root reducer with router state
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)
