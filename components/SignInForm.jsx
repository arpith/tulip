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
    this.onChange = (e) => this.setState({[e.target.name]: e.target.value});
  }

  login(e) {
    e.preventDefault();
    const { history, store } = this.context
    const { location } = this.props
    let nextPath = '/';
    if (location.state && location.state.nextPathname) {
      nextPath = location.state.nextPathname;
    }

    store.dispatch(actions.login(this.state, () => {
      history.pushState({}, nextPath)
    }));
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
          onChange={this.onChange}
          label="Username"
          type="email"
        />
        <Label htmlFor="password" value="Password" />
        <TextInput id="password" 
          name="password" 
          placeholder="Miaow" 
          onChange={this.onChange} 
          label="Password"
          type="password"
        />
        <Label htmlFor="server" value="Zulip Server" />
        <TextInput id="server" 
          name="realm" 
          placeholder="https://recurse.zulipchat.com" 
          defaultValue="https://recurse.zulipchat.com" 
          onChange={this.onChange} 
          label="Zulip Server"
          type="url"
        />
        <Button value="Sign In!" />
      </form>
    );
  }
}

export default SignInForm;
