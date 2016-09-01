import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';
import reducers from './reducers';

const mountNode = document.getElementById("react-mount");
const preloadedState = window.__PRELOADED_STATE__;

const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

const store = finalCreateStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  preloadedState
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes(store)} />
  </Provider>,
  mountNode
);
