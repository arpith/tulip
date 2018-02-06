import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';

function routes(store) {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
      const state = store.getState();
      if (state.config.apiKey) {
        return <Component {...props}/>;
      } else {
        return <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>;
      }
    }} />
  );

  return (
    <div>
      <PrivateRoute exact path="/" component={HomePage}/>
      <Route path="/login" component={SignInPage} />
    </div>
  );
}

export default routes;
