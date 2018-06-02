'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../styles/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var onclick = _ref.onclick,
      value = _ref.value;
  return _react2.default.createElement(
    'button',
    { style: _button2.default, onClick: onclick },
    value
  );
};