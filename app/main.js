import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import routes from './routes';
import * as reducers from './reducers';

const mountNode = document.getElementById("react-mount");
const preloadedState = window.__PRELOADED_STATE__;

const middleware = applyMiddleware(
  routerMiddleware(browserHistory),
  thunk
);

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(reducer, preloadedState, middleware);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes(store)} />
  </Provider>,
  mountNode
);
