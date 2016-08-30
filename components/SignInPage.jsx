import React from 'react';
import BackgroundImage from './BackgroundImage.jsx';
import SignInForm from './SignInForm.jsx';
import Heading from './Heading.jsx';
import Subheading from './Subheading.jsx';

class SignInPage extends React.Component {
  render() {
    const style = {
      height: '80%',
      margin: 'auto',
      padding: '2em',
      display: '-webkit-box',
      display: '-moz-box',
      display: '-ms-flexbox',
      display: '-webkit-flex',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      border: 'thick solid white'
    };
    return (
      <div>
        <BackgroundImage />
        <div style={style}>
          <Heading text='Welcome to Tulip' />
          <Subheading text='An experimental Zulip client' />
          <SignInForm />
        </div>
      </div>
    );
  }
}

export default SignInPage;
