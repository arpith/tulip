import React from 'react';
import TextInput from './TextInput.jsx';

class SignInForm extends React.Component {
  constructor() {
    super();
    this.state = {apiKey: '', email: ''};
  }

  login(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.apiKey);
  }

  onEmailChange(value) {
    this.setState({email: value});
  }

  onAPIKeyChange(value) {
    this.setState({apiKey: value});
  }

  render() {
    return <form onSubmit={this.login}>
      <label htmlFor="email">Email address</label>
      <TextInput id="email"
        name="email"
        placeholder="Your zulip account's email address"
        onChange={this.onEmailChange}
        initialValue={this.state.email}
      />
      <label htmlFor="API-key">API Key</label>
      <TextInput id="API-key" 
        name="API-key" 
        placeholder="Paste your API key here!" 
        onChange={this.onAPIKeyChange} 
        initialValue={this.state.apiKey}
      />
      <button>Sign In!</button>
    </form>;
  }
}

export default SignInForm;
