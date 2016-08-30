import React from 'react';
import zulip from 'zulip-js';
import TextInput from './TextInput.jsx';
import Label from './Label.jsx';
import Button from './Button.jsx';
import cookie from 'react-cookie';

class SignInForm extends React.Component {
  constructor() {
    super();
    this.state = {username: '', password: '', realm: ''};
    this.onEmailChange = (e) => this.setState({username: e.target.value});
    this.onPasswordChange = (e) => this.setState({password: e.target.value});
    this.onRealmChange = (e) => this.setState({realm: e.target.value});
  }

  login(e) {
    e.preventDefault();
    cookie.save('email', this.state.email, { path: '/' });
    cookie.save('password', this.state.password, {path: '/'});
    cookie.save('realm', this.state.realm, {path: '/'});
    zulip({user: this.state.email, password: this.state.password, realm: this.state.realm})
      .then(zulip => cookie.save('apiKey', zulip.config.apiKey, { path: '/' }));
  }

  render() {
    const style = {
      margin: 'auto'
    };
    return (
      <form onSubmit={this.login} style={style}>
        <Label htmlFor="email" value="Email Address" />
        <TextInput id="email"
          name="email"
          placeholder="Your zulip account's email address"
          onChange={this.onEmailChange}
          label="Email Address"
        />
        <Label htmlFor="password" value="Password" />
        <TextInput id="password" 
          name="password" 
          placeholder="Your zulip password" 
          onChange={this.onPasswordChange} 
          label="Password"
        />
        <Label htmlFor="realm" value="Realm" />
        <TextInput id="realm" 
          name="realm" 
          placeholder="Your zulip realm" 
          onChange={this.onPasswordChange} 
          label="Realm"
        />
        <Button value="Sign In!" />
      </form>
    );
  }
}

export default SignInForm;
