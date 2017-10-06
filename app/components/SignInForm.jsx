import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import Label from './Label';
import LabelledTextInput from './LabelledTextInput';
import Button from './Button.jsx';
import {signin} from '../actions';

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
    const style = {
      marginTop: '1.6em',
      marginBottom: '10em',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '90%'
    };
    return (
        <form onSubmit={this.login} style={style}>

        <LabelledTextInput
          labelValue="Username"
          name="username"
          placeholder="Username"
          onChange={this.onChange}
          type="email"
        />
        <LabelledTextInput
          labelValue="Password"
          name="password"
          placeholder="Password"
          onChange={this.onChange}
          type="password"
        />
        <LabelledTextInput
          labelValue="Zulip Server"
          name="realm"
          placeholder="https://recurse.zulipchat.com"
          defaultValue="https://recurse.zulipchat.com"
          onChange={this.onChange}
          type="url"
        />
        <Button value="Sign In" onclick={this.login} />
      </form>
    );
  }
}

export default SignInForm;
