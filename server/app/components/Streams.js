'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _leftColumn = require('../styles/leftColumn');

var _leftColumn2 = _interopRequireDefault(_leftColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Streams(_ref) {
  var streams = _ref.streams,
      subscriptions = _ref.subscriptions;

  var style = _extends({}, _leftColumn2.default, { overflowX: 'scroll' });
  var subscriptionIDs = subscriptions.map(function (s) {
    return s.stream_id;
  });
  var diff = streams.filter(function (_ref2) {
    var stream_id = _ref2.stream_id;
    return !subscriptionIDs.includes(stream_id);
  });
  var unified = subscriptions.concat(diff);
  var createDiv = function createDiv(s) {
    return _react2.default.createElement(
      'div',
      { key: s.stream_id },
      s.name
    );
  };
  return _react2.default.createElement(
    'div',
    { style: style },
    unified.map(createDiv)
  );
}

exports.default = (0, _reactRedux.connect)(function (_ref3) {
  var streams = _ref3.streams,
      subscriptions = _ref3.subscriptions;

  return { streams: streams, subscriptions: subscriptions };
})(Streams);