import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router-dom';
import routes from './routes';
import * as reducers from './reducers';

const mountNode = document.getElementById('react-mount');
const preloadedState = window.reduxPreloadedState;
const history = createHistory();

const middleware = applyMiddleware(
  routerMiddleware(history),
  thunk
);

const reducer = combineReducers({
  ...reducers,
  router: routerReducer,
});

const store = createStore(reducer, preloadedState, middleware);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes(store)}
    </ConnectedRouter>
  </Provider>,
  mountNode
);
