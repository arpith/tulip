import React from 'react';
import SignInPage from './SignInForm.jsx';

class HomePage extends React.Component {
  render() {
    if !(localStorage.email && localStorage.apiKey) return <SignInPage />;
    else return 
    return <div>
      <p>Welcome back to Tulip!</p>
      <p>Something should happen here :)</p>
    </div>;
  }
}

export default HomePage;
