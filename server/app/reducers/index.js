'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
exports.streams = streams;
exports.messages = messages;
exports.users = users;
exports.pointer = pointer;
exports.currentMessage = currentMessage;
exports.subscriptions = subscriptions;

var _constants = require('../constants');

var initialState = {
  config: {},
  streams: [],
  messages: [],
  users: [],
  pointer: 0,
  currentMessage: {},
  subscriptions: []
};

function updateMessage(messages, message) {
  var storedMessage = messages.find(function (e) {
    return e.id === message.id;
  });
  if (storedMessage === undefined) {
    messages.push(message);
  } else {
    Object.assign(storedMessage, message);
  }
}

function config(state, action) {
  switch (action.type) {
    case _constants.SIGN_IN:
      return action.config;
    default:
      if (!state) return initialState.config;
      return state;
  }
}

function streams(state, action) {
  switch (action.type) {
    case _constants.UPDATE_STREAMS:
      return action.streams;
    default:
      if (!state) return initialState.streams;
      return state;
  }
}

function messages(state, action) {
  switch (action.type) {
    case _constants.UPDATE_MESSAGES:
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = action.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var message = _step.value;

          updateMessage(state, message);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return state.slice();
    default:
      if (!state) return initialState.messages;
      return state;
  }
}

function users(state, action) {
  switch (action.type) {
    case _constants.UPDATE_USERS:
      return action.users;
    default:
      if (!state) return initialState.users;
      return state;
  }
}

function pointer(state, action) {
  switch (action.type) {
    case _constants.UPDATE_POINTER:
      return action.pointer;
    default:
      if (!state) return initialState.pointer;
      return state;
  }
}

function currentMessage(state, action) {
  switch (action.type) {
    case _constants.UPDATE_CURRENT_MESSAGE:
      return action.message;
    default:
      if (!state) return initialState.currentMessage;
      return state;
  }
}

function subscriptions(state, action) {
  switch (action.type) {
    case _constants.UPDATE_SUBSCRIPTIONS:
      return action.subscriptions;
    default:
      if (!state) return initialState.subscriptions;
      return state;
  }
}