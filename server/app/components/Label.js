'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('../styles/label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var htmlFor = _ref.htmlFor,
      value = _ref.value;
  return _react2.default.createElement(
    'label',
    { htmlFor: htmlFor, style: _label2.default },
    value
  );
};