'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _emoji = require('../emoji');

var _actions = require('../actions');

var _reaction = require('../styles/reaction');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reaction = function (_Component) {
  _inherits(Reaction, _Component);

  function Reaction(props) {
    _classCallCheck(this, Reaction);

    var _this = _possibleConstructorReturn(this, (Reaction.__proto__ || Object.getPrototypeOf(Reaction)).call(this, props));

    if (props.userHasReacted) {
      _this.state = { style: _reaction.hover };
    } else {
      _this.state = { style: _reaction.style };
    }
    _this.onHover = _this.onHover.bind(_this);
    return _this;
  }

  _createClass(Reaction, [{
    key: 'onHover',
    value: function onHover(shouldHighlight) {
      if (shouldHighlight) {
        this.setState({ style: _reaction.hover });
      } else {
        this.setState({ style: _reaction.style });
      }
      this.props.onHover();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var reactionEmoji = (0, _emoji.replaceColons)(':' + this.props.emojiName + ':');
      return _react2.default.createElement(
        'button',
        { style: this.state.style,
          onClick: function onClick() {
            if (_this2.props.userHasReacted) {
              _this2.props.decrement();
            } else {
              _this2.props.increment();
            }
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.onHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.onHover(_this2.props.userHasReacted);
          } },
        reactionEmoji
      );
    }
  }]);

  return Reaction;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, function (dispatch, _ref) {
  var emojiName = _ref.emojiName,
      messageID = _ref.messageID,
      emojiCode = _ref.emojiCode;
  return {
    increment: function increment() {
      return dispatch((0, _actions.addReaction)(messageID, emojiName, emojiCode));
    },
    decrement: function decrement() {
      return dispatch((0, _actions.removeReaction)(messageID, emojiName, emojiCode));
    }
  };
})(Reaction);