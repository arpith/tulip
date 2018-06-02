'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../actions');

var _signInForm = require('../styles/signInForm');

var _signInForm2 = _interopRequireDefault(_signInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignInForm = function (_Component) {
  _inherits(SignInForm, _Component);

  function SignInForm(props, context) {
    _classCallCheck(this, SignInForm);

    var _this = _possibleConstructorReturn(this, (SignInForm.__proto__ || Object.getPrototypeOf(SignInForm)).call(this, props, context));

    _this.state = { username: '', password: '', realm: '' };
    _this.onChange = function (e) {
      return _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };
    _this.login = function (e) {
      e.preventDefault();
      _this.props.login(_this.state);
    };
    return _this;
  }

  _createClass(SignInForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.login, style: _signInForm2.default },
        _react2.default.createElement(_Label2.default, { htmlFor: 'username', value: 'Username' }),
        _react2.default.createElement(_TextInput2.default, { id: 'username',
          name: 'username',
          placeholder: 'Username',
          onChange: this.onChange,
          label: 'Username',
          type: 'email'
        }),
        _react2.default.createElement(_Label2.default, { htmlFor: 'password', value: 'Password' }),
        _react2.default.createElement(_TextInput2.default, { id: 'password',
          name: 'password',
          placeholder: 'Password',
          onChange: this.onChange,
          label: 'Password',
          type: 'password'
        }),
        _react2.default.createElement(_Label2.default, { htmlFor: 'server', value: 'Zulip Server' }),
        _react2.default.createElement(_TextInput2.default, { id: 'server',
          name: 'realm',
          placeholder: 'https://recurse.zulipchat.com',
          defaultValue: 'https://recurse.zulipchat.com',
          onChange: this.onChange,
          label: 'Zulip Server',
          type: 'url'
        }),
        _react2.default.createElement(_Button2.default, { value: 'Sign In', onclick: this.login })
      );
    }
  }]);

  return SignInForm;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, function (dispatch) {
  return {
    login: function login(state) {
      dispatch((0, _actions.signin)(state, function () {
        return dispatch((0, _reactRouterRedux.push)('/'));
      }));
    }
  };
})(SignInForm);