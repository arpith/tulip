import React from 'react';
import BackgroundImage from './BackgroundImage.jsx';
import SignInForm from './SignInForm.jsx';

class SignInPage extends React.Component {
  render() {
    const style = {
      float: 'left',
      clear: 'left'
    };
    return <div>
      <BackgroundImage />
      <h2>Welcome to Tulip!</h2>
      <SignInForm />
      <div style={style}>
        <h2>Where do I find my API key????</h2>
        <p>Sign in on zulip.com, and head to your settings page. In the section on "your bots" click view API key :) Copy it, and paste it here!</p>
        <h2>What email address do I use???????</h2>
        <p>The email address associated with your zulip account!!</p>
      </div>
    </div>;
  }
}

export default SignInPage;
