'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var recipients = function recipients(_ref) {
  var recipients = _ref.recipients,
      username = _ref.username;

  var joined = "";
  if ((typeof recipients === 'undefined' ? 'undefined' : _typeof(recipients)) === "object") {
    // probably a private message (list of recipients)
    var names = recipients.map(function (r) {
      return r.full_name;
    });
    if (recipients.length === 1 && recipients[0].email === username) {
      joined = "You";
    } else {
      var index = recipients.map(function (r) {
        return r.email;
      }).indexOf(username);
      names.splice(index, 1);
      if (names.length === 1) {
        joined = names[0];
      } else {
        var last = names[names.length - 1];
        var others = names.slice(0, -1).join(", ");
        joined = others + ' and ' + last;
      }
    }
  } else {
    joined = recipients;
  }
  return _react2.default.createElement(
    'div',
    null,
    joined
  );
};

exports.default = (0, _reactRedux.connect)(function (_ref2) {
  var config = _ref2.config;

  return { username: config.username };
})(recipients);