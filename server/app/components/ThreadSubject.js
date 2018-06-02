'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _threadSubject = require('../styles/threadSubject');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var subject = _ref.subject;

  if (subject) {
    return _react2.default.createElement(
      'div',
      { style: _threadSubject.wrapper },
      _react2.default.createElement(
        'div',
        { style: _threadSubject.dot },
        '\xB7'
      ),
      _react2.default.createElement(
        'div',
        null,
        subject
      )
    );
  }
  return null;
};