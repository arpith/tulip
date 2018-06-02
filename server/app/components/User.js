'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = user;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Status = require('./Status');

var _Status2 = _interopRequireDefault(_Status);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _user = require('../styles/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function user(_ref) {
  var email = _ref.email,
      is_active = _ref.is_active,
      full_name = _ref.full_name,
      avatar_url = _ref.avatar_url;

  //<Status isActive={is_active} />
  return _react2.default.createElement(
    'div',
    { style: _user.wrapper },
    _react2.default.createElement(_Avatar2.default, { imgSize: 'small', wrapperSize: 'small', url: avatar_url }),
    _react2.default.createElement(
      'div',
      { style: _user.name },
      full_name
    )
  );
}