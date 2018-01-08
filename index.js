require('babel-core/register');
const throng = require('throng');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const cookieParser = require('cookie-parser');
const reactCookie = require('react-cookie');
const redux = require('redux');
const routerContext = require('./app/RouterContext').default;
const routes = require('./app/routes').default;
const reducers = require('./app/reducers');

throng(() => {
  const server = express();
  server.use(cookieParser());
  server.use(express.static('public'));
  server.set('view engine', 'ejs');

  server.get('*', (req, res) => {
    const store = redux.createStore(redux.combineReducers(reducers));
    const unplug = reactCookie.plugToRequest(req, res);
    ReactRouter.match({
      routes: routes(store),
      location: req.url,
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send({ error: error.message });
      } else if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const preloadedState = JSON.stringify(store.getState());
        const reactString = ReactDOMServer.renderToString(routerContext(renderProps));
        res.render('layout', { react: reactString, preloadedState });
      } else {
        res.status(404).send('Not Found');
      }
      unplug();
    });
  });
  const port = process.env.PORT || 3000;
  server.listen(port);
});
