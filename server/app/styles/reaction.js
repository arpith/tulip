'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var style = exports.style = {
  display: 'flex',
  border: 'none',
  marginRight: 8,
  backgroundColor: 'rgba(27,31,35,0.05)',
  borderRadius: 20,
  width: 32,
  height: 32,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: 'inherit',
  transition: 'background-color 200ms linear',
  outline: 0
};

var hover = exports.hover = _extends({}, style, { backgroundColor: 'rgba(0,162,255,0.8)' });