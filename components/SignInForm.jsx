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

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onAPIKeyChange(e) {
    this.setState({apiKey: e.target.value});
  }

  render() {
    return <form onSubmit={this.login}>
      <label htmlFor="email">Email address</label>
      <TextInput id="email"
        name="email"
        placeholder="Your zulip account's email address"
        onChange={this.onEmailChange}
      />
      <label htmlFor="API-key">API Key</label>
      <TextInput id="API-key" 
        name="API-key" 
        placeholder="Paste your API key here!" 
        onChange={this.onAPIKeyChange} 
      />
      <button>Sign In!</button>
    </form>;
  }
}

export default SignInForm;