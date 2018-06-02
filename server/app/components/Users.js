'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _rightColumn = require('../styles/rightColumn');

var _rightColumn2 = _interopRequireDefault(_rightColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Users(_ref) {
  var users = _ref.users;

  var style = _extends({}, _rightColumn2.default, { overflowY: 'scroll' });
  var user = function user(u) {
    return _react2.default.createElement(_User2.default, _extends({}, u, { key: u.email }));
  };
  return _react2.default.createElement(
    'div',
    { style: style },
    users.map(user)
  );
}

exports.default = (0, _reactRedux.connect)(function (state) {
  return { users: state.users };
})(Users);