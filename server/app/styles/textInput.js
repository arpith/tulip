'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (initialSize) {
  var base = initialSize || 1;
  var size = function size() {
    var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return base * ratio + 'em';
  };
  return {
    WebkitAppearance: 'none',
    fontFamily: 'inherit',
    fontWeight: '300',
    border: 'thin solid #D6D5D5',
    fontSize: size(),
    background: 'none',
    padding: size(0.2),
    margin: size(0.2),
    paddingLeft: size(0.4),
    paddingRight: size(0.4),
    marginRight: size(0.1),
    borderRadius: size(0.2),
    float: 'left'
  };
};