'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _underscore = require('underscore');

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _actions = require('../actions');

var _centerColumn = require('../styles/centerColumn');

var _centerColumn2 = _interopRequireDefault(_centerColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listeners = {};
var messagesToBeFlagged = [];

function addListener(listener) {
  var listenerID = Math.random();
  listeners[listenerID] = listener;
  return listenerID;
}

function removeListener(listenerID) {
  delete listeners[listenerID];
}

function onScroll() {
  Object.values(listeners).forEach(function (listener) {
    return listener();
  });
}

function batchUpdate(markAsRead, updatePointer, fetchMessages) {
  return function (id) {
    messagesToBeFlagged.push(id);
    if (messagesToBeFlagged.length > 10) {
      var messages = messagesToBeFlagged.splice(0, 10);
      var lastID = messages[messages.length - 1];
      markAsRead(messages);
      updatePointer(lastID);
      fetchMessages();
    }
  };
}

function Messages(_ref) {
  var messages = _ref.messages,
      markAsRead = _ref.markAsRead,
      updatePointer = _ref.updatePointer,
      fetchMessages = _ref.fetchMessages,
      updateHeader = _ref.updateHeader,
      updateCurrentMessage = _ref.updateCurrentMessage;

  var update = batchUpdate(markAsRead, updatePointer, fetchMessages);
  var message = function message(m) {
    return _react2.default.createElement(_Message2.default, { message: m,
      key: m.id,
      addListener: addListener,
      removeListener: removeListener,
      updateHandler: update,
      updateHeader: updateCurrentMessage
    });
  };
  var style = _extends({}, _centerColumn2.default, { overflowY: 'scroll' });
  var throttledOnScroll = (0, _underscore.throttle)(onScroll, 1000);
  return _react2.default.createElement(
    'div',
    { style: style, onScroll: throttledOnScroll },
    messages.map(message)
  );
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    markAsRead: function markAsRead(messages) {
      return dispatch((0, _actions.markAsRead)(messages));
    },
    updatePointer: function updatePointer(messages) {
      return dispatch((0, _actions.updatePointer)(messages));
    },
    fetchMessages: function fetchMessages(id) {
      return dispatch((0, _actions.fetchMessages)(id));
    },
    updateCurrentMessage: function updateCurrentMessage(message) {
      return dispatch((0, _actions.updateCurrentMessage)(message));
    }
  };
};

exports.default = (0, _reactRedux.connect)(function (_ref2) {
  var messages = _ref2.messages;
  return { messages: messages };
}, mapDispatchToProps)(Messages);