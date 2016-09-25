import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import SignInPage from './components/SignInPage.jsx';

function routes(store) {
  function requireAuth(nextState, replace) {
    const state = store.getState();
    if (!state.config.apiKey) replace('/login');
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} onEnter={requireAuth} />
      <Route path="/login" component={SignInPage} />
    </Route>
  );
}

export default routes;
