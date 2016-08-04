import React from 'react';
import SignInForm from './SignInForm.jsx';

class HomePage extends React.Component {
  render() {
    return <div>
    <p>Welcome to Tulip!</p>
    <SignInForm />
    <h2>Where do I find my API key????</h2>
    <p>Sign in on zulip.com, and head to your settings page. In the section on "your bots" click view API key :) Copy it, and paste it here!</p>
    <h2>What email address do I use???????</h2>
    <p>The email address associated with your zulip account!!</p>
    </div>;
  }
}

export default HomePage;
