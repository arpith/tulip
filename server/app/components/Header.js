'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CurrentSubject = require('./CurrentSubject');

var _CurrentSubject2 = _interopRequireDefault(_CurrentSubject);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Icons = require('./Icons');

var _Icons2 = _interopRequireDefault(_Icons);

var _header = require('../styles/header');

var _header2 = _interopRequireDefault(_header);

var _centerColumn = require('../styles/centerColumn');

var _centerColumn2 = _interopRequireDefault(_centerColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      center: _react2.default.createElement(_CurrentSubject2.default, null),
      hidden: _react2.default.createElement(_Search2.default, null)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      function toggleCenter() {
        this.setState({
          center: this.state.hidden,
          hidden: this.state.center
        });
      }
      return _react2.default.createElement(
        'div',
        { style: _header2.default },
        _react2.default.createElement(_Logo2.default, null),
        _react2.default.createElement(
          'div',
          { style: _centerColumn2.default },
          this.state.center
        ),
        _react2.default.createElement(_Icons2.default, { showSearch: toggleCenter })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;