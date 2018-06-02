'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.innerWrapper = exports.wrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _flex = require('./flex');

var wrapper = exports.wrapper = _extends({ marginBottom: '1.6em' }, _flex.column);
var innerWrapper = exports.innerWrapper = _extends({}, _flex.column, { minWidth: 0, wordWrap: 'break-word' });