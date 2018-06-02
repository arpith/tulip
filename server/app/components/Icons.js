'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _search = require('../../public/images/search.png');

var _search2 = _interopRequireDefault(_search);

var _user = require('../../public/images/user.png');

var _user2 = _interopRequireDefault(_user);

var _rightColumn = require('../styles/rightColumn');

var _rightColumn2 = _interopRequireDefault(_rightColumn);

var _icons = require('../styles/icons');

var _icons2 = _interopRequireDefault(_icons);

var _icon = require('../styles/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: _rightColumn2.default },
    _react2.default.createElement(
      'div',
      { style: _icons2.default },
      _react2.default.createElement('img', { src: _search2.default, style: _icon2.default }),
      _react2.default.createElement('img', { src: _user2.default, style: _icon2.default })
    )
  );
};