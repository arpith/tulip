'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('../../public/images/logo.png');

var _logo2 = _interopRequireDefault(_logo);

var _leftColumn = require('../styles/leftColumn');

var _leftColumn2 = _interopRequireDefault(_leftColumn);

var _logo3 = require('../styles/logo');

var _logo4 = _interopRequireDefault(_logo3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: _leftColumn2.default },
    _react2.default.createElement('img', { style: _logo4.default, src: _logo2.default })
  );
};