'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _throng = require('throng');

var _throng2 = _interopRequireDefault(_throng);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _StaticRouter = require('react-router/StaticRouter');

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _routes = require('./app/routes');

var _routes2 = _interopRequireDefault(_routes);

var _reducers = require('./app/reducers');

var reducers = _interopRequireWildcard(_reducers);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-core/register');


var templatePath = _path2.default.join(__dirname, '..', 'client', 'index.html');
var HTML_TEMPLATE = _fs2.default.readFileSync(templatePath).toString();

(0, _throng2.default)(function () {
  var server = (0, _express2.default)();
  server.use((0, _cookieParser2.default)());
  server.use('/dist', _express2.default.static('dist/client'));
  server.use(_express2.default.static('dist/server/public'));

  server.get('*', function (req, res) {
    var store = (0, _redux.createStore)((0, _redux.combineReducers)(reducers));
    var unplug = _reactCookie2.default.plugToRequest(req, res);
    var context = {};
    var preloadedState = JSON.stringify(store.getState());
    var reactString = _server2.default.renderToString(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _StaticRouter2.default,
        { location: req.url, context: context },
        (0, _routes2.default)(store)
      )
    ));
    if (context.url) {
      res.redirect(context.url);
    } else {
      var $template = _cheerio2.default.load(HTML_TEMPLATE);
      $template('#react-mount').html(reactString).after('<script>window.reduxPreloadedState=' + preloadedState + '</script>');
      res.send($template.html());
    }
    unplug();
  });
  var port = process.env.PORT || 3000;
  server.listen(port);
});