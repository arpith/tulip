'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sender = require('../styles/sender');

var _sender2 = _interopRequireDefault(_sender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var name = _ref.name;
  return _react2.default.createElement(
    'div',
    { style: _sender2.default },
    name
  );
};