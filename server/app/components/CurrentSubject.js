'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ThreadTitle = require('./ThreadTitle');

var _ThreadTitle2 = _interopRequireDefault(_ThreadTitle);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _currentSubject = require('../styles/currentSubject');

var _currentSubject2 = _interopRequireDefault(_currentSubject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CurrentSubject(message) {
  return _react2.default.createElement(
    'div',
    { style: _currentSubject2.default },
    _react2.default.createElement(_Avatar2.default, { url: message.avatar_url, imgSize: 'small', hidden: !message.avatar_url }),
    _react2.default.createElement(_ThreadTitle2.default, message)
  );
}

exports.default = (0, _reactRedux.connect)(function (state) {
  return state.currentMessage;
})(CurrentSubject);