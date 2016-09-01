import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

const combinedReducer = combineReducers(Object.assign({
  router: routerStateReducer
}, reducers));

export default function configureStore (initialState) {
  const store = finalCreateStore(combinedReducer, initialState);
  return store;
}
