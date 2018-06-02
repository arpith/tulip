'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = exports.wrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _flex = require('./flex');

var wrapper = exports.wrapper = _extends({}, _flex.row, {
  paddingTop: '1em',
  paddingLeft: '0.4em'
});

var name = exports.name = {
  overflow: 'scroll',
  whiteSpace: 'nowrap'
};