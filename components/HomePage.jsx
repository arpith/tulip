import React from 'react';
import SignInPage from './SignInPage.jsx';

class HomePage extends React.Component {
  render() {
    if (!(localStorage.email && localStorage.apiKey)) return <SignInPage />;
    else return <div>
      <p>Welcome back to Tulip!</p>
      <p>Something should happen here :)</p>
    </div>;
  }
}

export default HomePage;
