import React from 'react';
import TextInput from './TextInput.jsx';
import Label from './Label.jsx';
import Button from './Button.jsx';
import cookie from 'react-cookie';

class SignInForm extends React.Component {
  constructor() {
    super();
    this.state = {apiKey: '', email: ''};
    this.onEmailChange = (e) => this.setState({email: e.target.value});
    this.onAPIKeyChange = (e) => this.setState({apiKey: e.target.value});
  }

  login(e) {
    e.preventDefault();
    cookie.save('email', this.state.email, { path: '/' });
    cookie.save('apiKey', this.state.apiKey, { path: '/' });
  }

  render() {
    const style = {
      float: 'left',
      clear: 'both'
    };
    return <form onSubmit={this.login} style={style}>
      <Label htmlFor="email" value="Email Address" />
      <TextInput id="email"
        name="email"
        placeholder="Your zulip account's email address"
        onChange={this.onEmailChange}
        label="Email Address"
      />
      <Label htmlFor="API-key" value="API Key" />
      <TextInput id="API-key" 
        name="API-key" 
        placeholder="Paste your API key here!" 
        onChange={this.onAPIKeyChange} 
        label="API Key"
      />
      <Button value="Sign In!" />
    </form>;
  }
}

export default SignInForm;
