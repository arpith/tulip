'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReaction = addReaction;
exports.removeReaction = removeReaction;
exports.updateCurrentMessage = updateCurrentMessage;
exports.markAsRead = markAsRead;
exports.updatePointer = updatePointer;
exports.fetchPointer = fetchPointer;
exports.fetchSubscriptions = fetchSubscriptions;
exports.fetchStreams = fetchStreams;
exports.fetchMessages = fetchMessages;
exports.fetchUsers = fetchUsers;
exports.fetchEvent = fetchEvent;
exports.registerQueue = registerQueue;
exports.signin = signin;

var _zulipJs = require('zulip-js');

var _zulipJs2 = _interopRequireDefault(_zulipJs);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addReaction(message_id, emoji_name, emoji_code) {
  return function (dispatch, getState) {
    var _getState = getState(),
        config = _getState.config;

    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.reactions.add({ message_id: message_id, emoji_name: emoji_name, emoji_code: emoji_code });
    }).then(function (_ref) {
      var result = _ref.result;

      if (result === 'success') {
        fetchMessages(message_id, 0, 0)(dispatch, getState);
      }
    });
  };
}

function removeReaction(message_id, emoji_name, emoji_code) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        config = _getState2.config;

    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.reactions.remove({ message_id: message_id, emoji_name: emoji_name, emoji_code: emoji_code });
    }).then(function (_ref2) {
      var result = _ref2.result;

      if (result === 'success') {
        fetchMessages(message_id, 0, 0)(dispatch, getState);
      }
    });
  };
}

function updateCurrentMessage(message) {
  return function (dispatch) {
    dispatch({
      type: _constants.UPDATE_CURRENT_MESSAGE,
      message: message
    });
  };
}

function markAsRead(messages) {
  return function (dispatch, getState) {
    var _getState3 = getState(),
        config = _getState3.config;

    var flag = 'read';
    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.messages.flags.add({ flag: flag, messages: messages });
    });
  };
}

function updatePointer(id) {
  return function (dispatch, getState) {
    var _getState4 = getState(),
        config = _getState4.config;

    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.users.me.pointer.update(id);
    }).then(function (_ref3) {
      var result = _ref3.result;

      if (result === 'success') {
        dispatch({
          type: _constants.UPDATE_POINTER,
          pointer: id
        });
      }
    });
  };
}

function fetchPointer(dispatch, config) {
  return (0, _zulipJs2.default)(config).then(function (z) {
    return z.users.me.pointer.retrieve();
  }).then(function (_ref4) {
    var pointer = _ref4.pointer;

    dispatch({
      type: _constants.UPDATE_POINTER,
      pointer: pointer
    });
    return pointer;
  });
}

function fetchSubscriptions(redirect) {
  return function (dispatch, getState) {
    var _getState5 = getState(),
        config = _getState5.config;

    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.streams.subscriptions.retrieve();
    }).then(function (_ref5) {
      var subscriptions = _ref5.subscriptions;

      dispatch({
        type: _constants.UPDATE_SUBSCRIPTIONS,
        subscriptions: subscriptions
      });
      if (redirect) redirect();
    });
  };
}

function fetchStreams(redirect) {
  return function (dispatch, getState) {
    var _getState6 = getState(),
        config = _getState6.config;

    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.streams.retrieve();
    }).then(function (res) {
      dispatch({
        type: _constants.UPDATE_STREAMS,
        streams: res.streams
      });
      if (redirect) redirect();
    });
  };
}

function fetchMessages(anchor) {
  var num_before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var num_after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

  return function (dispatch, getState) {
    var _getState7 = getState(),
        config = _getState7.config,
        messages = _getState7.messages;

    var params = {
      num_before: num_before,
      num_after: num_after,
      anchor: anchor
    };
    if (!anchor) {
      var lastMessage = messages[messages.length - 1];
      params.num_before = 0;
      params.anchor = lastMessage.id;
    }
    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.messages.retrieve(params);
    }).then(function (res) {
      dispatch({
        type: _constants.UPDATE_MESSAGES,
        messages: res.messages
      });
    });
  };
}

function fetchUsers(redirect) {
  return function (dispatch, getState) {
    var _getState8 = getState(),
        config = _getState8.config;

    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.users.retrieve({});
    }).then(function (res) {
      var users = [].concat(res.members);
      dispatch({
        type: _constants.UPDATE_USERS,
        users: users
      });
      if (redirect) redirect();
    });
  };
}

function fetchEvent(queueID) {
  var lastEventID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  var waitTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;

  return function (dispatch, config) {
    var params = {
      queue_id: queueID,
      last_event_id: lastEventID,
      dont_block: false
    };

    setTimeout(function () {
      (0, _zulipJs2.default)(config).then(function (z) {
        return z.events.retrieve(params);
      }).then(function (_ref6) {
        var events = _ref6.events;

        var messages = events.filter(function (e) {
          return e.type === "message";
        }).map(function (e) {
          return e.message;
        });
        var lastEventID = events[events.length - 1].id;
        dispatch({
          type: _constants.UPDATE_MESSAGES,
          messages: messages
        });
        fetchEvent(queueID, lastEventID, 10000)(dispatch, config);
      }).catch(function () {
        fetchEvent(queueID, lastEventID, waitTime * 2)(dispatch, config);
      });
    }, waitTime);
  };
}

function registerQueue() {
  var eventTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['message'];
  var waitTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  return function (dispatch, config) {
    var params = {
      event_types: eventTypes,
      apply_markdown: true
    };
    return (0, _zulipJs2.default)(config).then(function (z) {
      return z.queues.register(params);
    }).then(function (_ref7) {
      var queue_id = _ref7.queue_id;

      fetchEvent(queue_id)(dispatch, config);
    }).catch(function () {
      setTimeout(function () {
        registerQueue(eventTypes, waitTime * 2)(dispatch, config);
      }, waitTime);
    });
  };
}

function signin(configWithPassword, redirect) {
  return function (dispatch, getState) {
    (0, _zulipJs2.default)(configWithPassword).then(function (_ref8) {
      var config = _ref8.config;

      dispatch({
        type: _constants.SIGN_IN,
        config: config
      });
      registerQueue()(dispatch, config);
      fetchPointer(dispatch, config).then(function (pointer) {
        fetchMessages(pointer)(dispatch, getState);
      });
      fetchSubscriptions()(dispatch, getState);
      fetchStreams()(dispatch, getState);
      fetchUsers()(dispatch, getState);
      if (redirect) redirect();
    });
  };
}