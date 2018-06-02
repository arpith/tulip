'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceColons = replaceColons;

var _emojiJs = require('emoji-js');

var _emojiJs2 = _interopRequireDefault(_emojiJs);

var _zulip_missing_emoji_names = require('../public/zulip_missing_emoji_names.json');

var _zulip_missing_emoji_names2 = _interopRequireDefault(_zulip_missing_emoji_names);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiConverter = new _emojiJs2.default();
emojiConverter.addAliases(_zulip_missing_emoji_names2.default);

function replaceColons(str) {
  try {
    return emojiConverter.replace_colons(str);
  } catch (err) {
    console.log("could not convert emoji", err);
    return str;
  }
}