require('throng')(function() {
  require('babel-core/register');
  var React = require('react');
  var ReactDOMServer = require('react-dom/server');
  var ReactRouter = require('react-router');
  var koa = require('koa');
  var render = require('koa-ejs');
  var serve = require('koa-static');
  var path = require('path');
  var RouterContext = require('./RouterContext');
  var routes = require('./routes').default;
  var app = koa();

  render(app, {root: path.join(__dirname, 'view')});

  app.use(serve('public'));

  app.use(function *() {
    var reactString;
    ReactRouter.match({ routes: routes, location: this.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        this.throw(error.message, 500);
      } else if (redirectLocation) {
        this.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        reactString = ReactDOMServer.renderToString(RouterContext(renderProps));
      } else {
        this.throw('Not Found', 404);
      }
    });
    yield this.render('layout', {react: reactString});
  });

  var port = process.env.PORT || 3000;
  console.log("Starting up on port " + port);
  app.listen(port);

});
