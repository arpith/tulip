'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ReactionsList = require('./ReactionsList');

var _ReactionsList2 = _interopRequireDefault(_ReactionsList);

var _ReactionUsers = require('./ReactionUsers');

var _ReactionUsers2 = _interopRequireDefault(_ReactionUsers);

var _reactions = require('../styles/reactions');

var _reactions2 = _interopRequireDefault(_reactions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reactions = function (_Component) {
  _inherits(Reactions, _Component);

  function Reactions(props, context) {
    _classCallCheck(this, Reactions);

    var _this = _possibleConstructorReturn(this, (Reactions.__proto__ || Object.getPrototypeOf(Reactions)).call(this, props, context));

    _this.state = _extends({
      users: [],
      displayUsers: false
    }, _this.buildEmojisAndAllUsers(props));
    _this.toggleDisplayUsers = _this.toggleDisplayUsers.bind(_this);
    _this.displayUsers = _this.displayUsers.bind(_this);
    return _this;
  }

  _createClass(Reactions, [{
    key: 'buildEmojisAndAllUsers',
    value: function buildEmojisAndAllUsers(_ref) {
      var reactions = _ref.reactions,
          username = _ref.username;

      var emojis = {};
      var users = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = reactions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref2 = _step.value;
          var emoji_name = _ref2.emoji_name,
              emoji_code = _ref2.emoji_code,
              user = _ref2.user;

          if (!emojis[emoji_code]) {
            emojis[emoji_code] = {
              emojiName: emoji_name,
              emojiCode: emoji_code,
              userHasReacted: false,
              users: []
            };
          }
          if (user.email === username) {
            emojis[emoji_code].userHasReacted = true;
          }
          users[user.email] = user;
          emojis[emoji_code].users.push(user);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return { emojis: emojis, allUsers: Object.values(users) };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState(this.buildEmojisAndAllUsers(props));
    }
  }, {
    key: 'toggleDisplayUsers',
    value: function toggleDisplayUsers() {
      this.setState(function (_ref3) {
        var allUsers = _ref3.allUsers,
            displayUsers = _ref3.displayUsers;

        if (!displayUsers) {
          return { users: allUsers, displayUsers: true };
        }
        return { displayUsers: false };
      });
    }
  }, {
    key: 'displayUsers',
    value: function displayUsers(emojiCode) {
      this.setState(function (_ref4) {
        var emojis = _ref4.emojis;
        return { users: emojis[emojiCode].users };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _reactions2.default, onMouseEnter: this.toggleDisplayUsers, onMouseLeave: this.toggleDisplayUsers },
        _react2.default.createElement(_ReactionsList2.default, { emojis: Object.values(this.state.emojis),
          onHover: this.displayUsers,
          messageID: this.props.messageID
        }),
        _react2.default.createElement(_ReactionUsers2.default, { users: this.state.users, shouldDisplay: this.state.displayUsers })
      );
    }
  }]);

  return Reactions;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (_ref5) {
  var config = _ref5.config;
  return { username: config.username };
})(Reactions);