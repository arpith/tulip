'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textInput = require('../styles/textInput');

var _textInput2 = _interopRequireDefault(_textInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var size = _ref.size,
      type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange;

  if (!type) type = "text";
  return _react2.default.createElement('input', { id: id,
    name: name,
    placeholder: placeholder,
    onChange: onChange,
    style: (0, _textInput2.default)(size),
    type: type
  });
};