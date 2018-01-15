import React from 'react';
import SignInForm from './SignInForm';
import Heading from './Heading';
import Subheading from './Subheading';

class SignInPage extends React.Component {
  render() {
    const style = {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    };
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
