'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _timestamp = require('../styles/timestamp');

var _timestamp2 = _interopRequireDefault(_timestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var timestamp = _ref.timestamp;
  return _react2.default.createElement(
    'div',
    { style: _timestamp2.default },
    (0, _moment2.default)(timestamp, 'X').fromNow()
  );
};