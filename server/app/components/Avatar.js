'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _avatar = require('../styles/avatar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var url = _ref.url,
      hidden = _ref.hidden,
      imgSize = _ref.imgSize,
      wrapperSize = _ref.wrapperSize;

  var content = _react2.default.createElement('div', { style: { width: 50 } });
  if (!hidden) {
    content = _react2.default.createElement('img', { style: (0, _avatar.img)(imgSize), src: url });
  }
  return _react2.default.createElement(
    'div',
    { style: (0, _avatar.wrapper)(wrapperSize) },
    content
  );
};