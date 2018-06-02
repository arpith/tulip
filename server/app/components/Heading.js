'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _heading = require('../styles/heading');

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    'h1',
    { style: _heading2.default },
    text
  );
};