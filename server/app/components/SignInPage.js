'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SignInForm = require('./SignInForm');

var _SignInForm2 = _interopRequireDefault(_SignInForm);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Subheading = require('./Subheading');

var _Subheading2 = _interopRequireDefault(_Subheading);

var _signInPage = require('../styles/signInPage');

var _signInPage2 = _interopRequireDefault(_signInPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignInPage = function (_React$Component) {
  _inherits(SignInPage, _React$Component);

  function SignInPage() {
    _classCallCheck(this, SignInPage);

    return _possibleConstructorReturn(this, (SignInPage.__proto__ || Object.getPrototypeOf(SignInPage)).apply(this, arguments));
  }

  _createClass(SignInPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _signInPage2.default },
        _react2.default.createElement(_Heading2.default, { text: 'Welcome to Tulip' }),
        _react2.default.createElement(_Subheading2.default, { text: 'An experimental Zulip client' }),
        _react2.default.createElement(_SignInForm2.default, null)
      );
    }
  }]);

  return SignInPage;
}(_react2.default.Component);

exports.default = SignInPage;