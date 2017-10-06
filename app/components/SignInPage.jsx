import React from 'react';
import AlignedLabelledInput from './AlignedLabelledInput';
import SignInForm from './SignInForm';
import Heading from './Heading';
import Subheading from './Subheading';

class SignInPage extends React.Component {
  render() {
    const style = {
      height: '100%',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    };
    //<Label value="Username" />

    return (
      <div style={style}>

        <Heading text='Welcome to Tulip' />
        <Subheading text='An experimental Zulip client' />
        <AlignedLabelledInput />
        <AlignedLabelledInput />
        <SignInForm />
      </div>
    );
  }
}

export default SignInPage;
