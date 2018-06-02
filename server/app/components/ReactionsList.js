'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Reaction = require('./Reaction');

var _Reaction2 = _interopRequireDefault(_Reaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reaction(emoji, _onHover, messageID) {
  return _react2.default.createElement(_Reaction2.default, _extends({ key: emoji.emojiCode,
    messageID: messageID,
    onHover: function onHover() {
      return _onHover(emoji.emojiCode);
    }
  }, emoji));
}

exports.default = function (_ref) {
  var emojis = _ref.emojis,
      onHover = _ref.onHover,
      messageID = _ref.messageID;

  return emojis.map(function (emoji) {
    return reaction(emoji, onHover, messageID);
  });
};