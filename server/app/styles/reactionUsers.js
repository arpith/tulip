'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visible = exports.hidden = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _smallText = require('../styles/smallText');

var _smallText2 = _interopRequireDefault(_smallText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hidden = exports.hidden = _extends({}, _smallText2.default, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.4s',
  opacity: 0,
  visibility: 'hidden'
});

var visible = exports.visible = _extends({}, hidden, { opacity: 1, visibility: 'visible' });