'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _subheading = require('../styles/subheading');

var _subheading2 = _interopRequireDefault(_subheading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    'h2',
    { style: _subheading2.default },
    text
  );
};