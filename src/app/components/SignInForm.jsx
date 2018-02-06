import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TextInput from './TextInput';
import Label from './Label';
import Button from './Button';
import { signin } from '../actions';
import style from '../styles/signInForm';

class SignInForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {username: '', password: '', realm: ''};
    this.onChange = (e) => this.setState({[e.target.name]: e.target.value});
    this.login = (e) => {
      e.preventDefault();
      this.props.login(this.state);
    };
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

export default connect(null, dispatch => ({
  login: (state) => {
    dispatch(signin(state, () => dispatch(push('/'))))
  }
}))(SignInForm);
