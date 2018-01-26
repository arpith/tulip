import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import Label from './Label';
import Button from './Button';
import { signin } from '../actions';
import style from '../styles/signInForm';

class SignInForm extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {username: '', password: '', realm: ''};
    this.onChange = (e) => this.setState({[e.target.name]: e.target.value});
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    let nextPath = '/';
    this.context.store.dispatch(signin(this.state, () => {
      this.context.history.pushState({}, nextPath);
    }));
  }

  render() {
    return (
      <form onSubmit={this.login} style={style}>
        <Label htmlFor="username" value="Username" />
        <TextInput id="username"
          name="username"
          placeholder="Username"
          onChange={this.onChange}
          label="Username"
          type="email"
        />
        <Label htmlFor="password" value="Password" />
        <TextInput id="password" 
          name="password" 
          placeholder="Password" 
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
        <Button value="Sign In" onclick={this.login} />
      </form>
    );
  }
}

export default SignInForm;
