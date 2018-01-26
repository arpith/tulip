import React from 'react';
import SignInForm from './SignInForm';
import Heading from './Heading';
import Subheading from './Subheading';
import style from '../styles/signInPage';

class SignInPage extends React.Component {
  render() {
    return (
      <div style={style}>
        <Heading text='Welcome to Tulip' />
        <Subheading text='An experimental Zulip client' />
        <SignInForm />
      </div>
    );
  }
}

export default SignInPage;
