require('babel-core/register');
import fs from 'fs';
import path from 'path';
import throng from 'throng';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StaticRouter from 'react-router/StaticRouter';
import cookieParser from 'cookie-parser';
import reactCookie from 'react-cookie';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import routes from './app/routes';
import * as reducers from './app/reducers';
import cheerio from 'cheerio';

const templatePath = path.join(__dirname, '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

throng(() => {
  const server = express();
  server.use(cookieParser());
  server.use('/dist', express.static('dist/client'));
  server.use(express.static('dist/server/public'));

  server.get('*', (req, res) => {
    const store = createStore(combineReducers(reducers));
    const unplug = reactCookie.plugToRequest(req, res);
    const context = {};
    const preloadedState = JSON.stringify(store.getState());
    const reactString = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {routes(store)}
        </StaticRouter>
      </Provider>
    );
    if (context.url) {
      res.redirect(context.url);
    } else {
      const $template = cheerio.load(HTML_TEMPLATE);
      $template('#react-mount')
        .html(reactString)
        .after(`<script>window.reduxPreloadedState=${preloadedState}</script>`);
      res.send($template.html());
    }
    unplug();
  });
  const port = process.env.PORT || 3000;
  server.listen(port);
});
