'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var isActive = _ref.isActive;

  var style = _status.inactive;
  if (isActive) {
    style = _status.active;
  }
  return _react2.default.createElement('div', { style: style });
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _status = require('../styles/status');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;