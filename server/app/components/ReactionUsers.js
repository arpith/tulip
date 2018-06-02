'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactionUsers = require('../styles/reactionUsers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var users = _ref.users,
      shouldDisplay = _ref.shouldDisplay;

  var names = users.map(function (user) {
    return user.full_name;
  });
  var joinedNames = names.slice(0, 2).join(', ');
  if (names.length > 3) {
    joinedNames += ' and ' + (names.length - 2) + ' others';
  } else if (names.length === 2 || names.length === 3) {
    joinedNames = names.slice(0, names.length - 1).join(', ');
    joinedNames += ' and ' + names[names.length - 1];
  }
  var style = _reactionUsers.hidden;
  if (shouldDisplay) {
    style = _reactionUsers.visible;
  }
  return _react2.default.createElement(
    'div',
    { style: style },
    joinedNames
  );
};