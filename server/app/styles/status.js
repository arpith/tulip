'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var style = {
  borderRadius: '50%',
  width: 10,
  height: 10,
  marginRight: 6
};

var active = exports.active = _extends({}, style, { backgroundColor: 'rgba(61,192,108,0.8)' });
var inactive = exports.inactive = _extends({}, style, { backgroundColor: 'rgba(255,126,121,0.8)' });