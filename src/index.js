require('babel-core/register');
import fs from 'fs';
import path from 'path';
import throng from 'throng';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { match } from 'react-router';
import cookieParser from 'cookie-parser';
import reactCookie from 'react-cookie';
import { createStore, combineReducers } from 'redux';
import routerContext from './app/RouterContext';
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
    match({
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
        const $template = cheerio.load(HTML_TEMPLATE);
        $template('#react-mount')
          .html(reactString)
          .after(`<script>window.reduxPreloadedState=${preloadedState}</script>`);
        res.send($template.html());
      } else {
        res.status(404).send('Not Found');
      }
      unplug();
    });
  });
  const port = process.env.PORT || 3000;
  server.listen(port);
});
