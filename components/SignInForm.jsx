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
    this.onUsernameChange = (e) => this.setState({username: e.target.value});
    this.onPasswordChange = (e) => this.setState({password: e.target.value});
    this.onRealmChange = (e) => this.setState({realm: e.target.value});
  }

  login(e) {
    e.preventDefault();
    cookie.save('username', this.state.username, { path: '/' });
    cookie.save('password', this.state.password, {path: '/'});
    cookie.save('realm', this.state.realm, {path: '/'});
    zulip({username: this.state.username, password: this.state.password, realm: this.state.realm})
      .then(zulip => cookie.save('apiKey', zulip.config.apiKey, { path: '/' }));
  }

  render() {
    const style = {
      margin: 'auto'
    };
    return (
      <form onSubmit={this.login} style={style}>
        <Label htmlFor="username" value="Username" />
        <TextInput id="username"
          name="username"
          placeholder="Your zulip username"
          onChange={this.onEmailChange}
          label="Username"
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
