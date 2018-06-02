'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactDom = require('react-dom');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reactRouterDom = require('react-router-dom');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reducers = require('./reducers');

var reducers = _interopRequireWildcard(_reducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mountNode = document.getElementById('react-mount');
var preloadedState = window.reduxPreloadedState;
var history = (0, _createBrowserHistory2.default)();

var middleware = (0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history), _reduxThunk2.default);

var reducer = (0, _redux.combineReducers)(_extends({}, reducers, {
  router: _reactRouterRedux.routerReducer
}));

var store = (0, _redux.createStore)(reducer, preloadedState, middleware);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterRedux.ConnectedRouter,
    { history: history },
    (0, _routes2.default)(store)
  )
), mountNode);