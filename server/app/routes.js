'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _HomePage = require('./components/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _SignInPage = require('./components/SignInPage');

var _SignInPage2 = _interopRequireDefault(_SignInPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function routes(store) {
  var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        rest = _objectWithoutProperties(_ref, ['component']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
        var state = store.getState();
        if (state.config.apiKey) {
          return _react2.default.createElement(Component, props);
        } else {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: {
              pathname: '/login',
              state: { from: props.location }
            } });
        }
      } }));
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(PrivateRoute, { exact: true, path: '/', component: _HomePage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _SignInPage2.default })
  );
}

exports.default = routes;