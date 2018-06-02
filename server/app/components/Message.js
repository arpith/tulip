'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Sender = require('./Sender');

var _Sender2 = _interopRequireDefault(_Sender);

var _Timestamp = require('./Timestamp');

var _Timestamp2 = _interopRequireDefault(_Timestamp);

var _ThreadTitle = require('./ThreadTitle');

var _ThreadTitle2 = _interopRequireDefault(_ThreadTitle);

var _AvatarBlank = require('./AvatarBlank');

var _AvatarBlank2 = _interopRequireDefault(_AvatarBlank);

var _Reactions = require('./Reactions');

var _Reactions2 = _interopRequireDefault(_Reactions);

var _emoji = require('../emoji');

var _flex = require('../styles/flex');

var _message = require('../styles/message');

var _dimensions = require('../styles/dimensions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// see https://github.com/fkhadra/react-on-screen/blob/master/src/TrackVisibility.js
var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message(props, context) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props, context));

    _this.isRead = _this.isRead.bind(_this);
    _this.throttledIsRead = (0, _underscore.throttle)(_this.isRead, 1000);
    _this.state = {};
    return _this;
  }

  _createClass(Message, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.attachListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListener();
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      this.props.removeListener(this.state.listenerID);
    }
  }, {
    key: 'attachListener',
    value: function attachListener() {
      var listenerID = this.props.addListener(this.throttledIsRead);
      this.setState({ listenerID: listenerID });
    }
  }, {
    key: 'isRead',
    value: function isRead() {
      var rect = this.nodeRef.getBoundingClientRect();
      var bodyTop = _dimensions.headerHeight;
      var messageContentTop = rect.top + _dimensions.threadTitleHeight;
      if (messageContentTop > bodyTop) {
        this.setState({ hideAvatar: false });
      }
      if (messageContentTop < bodyTop && rect.bottom > bodyTop) {
        this.props.updateHeader(this.props.message);
        this.setState({ hideAvatar: true });
      }
      if (rect.bottom < bodyTop) {
        this.props.updateHandler(this.props.message.id);
        this.removeListener();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var contentWithEmojis = (0, _emoji.replaceColons)(this.props.message.content);
      var markedupContent = { __html: contentWithEmojis };
      return _react2.default.createElement(
        'div',
        { style: _message.wrapper, ref: function ref(e) {
            return _this2.nodeRef = e;
          } },
        _react2.default.createElement(
          'div',
          { style: _flex.row },
          _react2.default.createElement(_AvatarBlank2.default, null),
          _react2.default.createElement(_ThreadTitle2.default, this.props.message)
        ),
        _react2.default.createElement(
          'div',
          { style: _flex.row },
          _react2.default.createElement(_Avatar2.default, { url: this.props.message.avatar_url, hidden: this.state.hideAvatar }),
          _react2.default.createElement(
            'div',
            { style: _message.innerWrapper },
            _react2.default.createElement(
              'div',
              { style: _flex.row },
              _react2.default.createElement(_Sender2.default, { name: this.props.message.sender_full_name }),
              _react2.default.createElement(_Timestamp2.default, { timestamp: this.props.message.timestamp })
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: markedupContent, className: 'messageContent' }),
            _react2.default.createElement(_Reactions2.default, { reactions: this.props.message.reactions, messageID: this.props.message.id })
          )
        )
      );
    }
  }]);

  return Message;
}(_react2.default.Component);

exports.default = Message;