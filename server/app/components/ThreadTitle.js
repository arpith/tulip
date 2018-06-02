'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emoji = require('../emoji');

var _threadTitle = require('../styles/threadTitle');

var _threadTitle2 = _interopRequireDefault(_threadTitle);

var _Recipients = require('./Recipients');

var _Recipients2 = _interopRequireDefault(_Recipients);

var _ThreadSubject = require('./ThreadSubject');

var _ThreadSubject2 = _interopRequireDefault(_ThreadSubject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var display_recipient = _ref.display_recipient,
      subject = _ref.subject;

  return _react2.default.createElement(
    'div',
    { style: _threadTitle2.default },
    _react2.default.createElement(_Recipients2.default, { recipients: display_recipient }),
    _react2.default.createElement(_ThreadSubject2.default, { subject: (0, _emoji.replaceColons)(subject) })
  );
};