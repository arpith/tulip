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
    this.onServerChange = (e) => this.setState({realm: e.target.value});
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
          placeholder="Chatty McChat"
          onChange={this.onEmailChange}
          label="Username"
          type="email"
        />
        <Label htmlFor="password" value="Password" />
        <TextInput id="password" 
          name="password" 
          placeholder="Miaow" 
          onChange={this.onPasswordChange} 
          label="Password"
          type="password"
        />
        <Label htmlFor="server" value="Zulip Server" />
        <TextInput id="server" 
          name="server" 
          placeholder="https://recurse.zulipchat.com" 
          onChange={this.onServerChange} 
          label="Zulip Server"
          type="url"
        />
        <Button value="Sign In!" />
      </form>
    );
  }
}

export default SignInForm;
