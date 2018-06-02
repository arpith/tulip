'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = wrapper;
exports.img = img;

var _dimensions = require('./dimensions');

function wrapper(size) {
  var style = {
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1.2em',
    flexBasis: _dimensions.avatar
  };
  if (size === "small") {
    style.flexBasis = _dimensions.smallAvatar;
    style.marginRight = '1em';
  }
  return style;
}

function img(size) {
  var style = { borderRadius: '50%', height: _dimensions.avatar };
  if (size === "small") {
    style.height = _dimensions.smallAvatar;
  }
  return style;
};