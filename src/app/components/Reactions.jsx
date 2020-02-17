import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactionsList from './ReactionsList';
import ReactionUsers from './ReactionUsers';
import style from '../styles/reactions';

class Reactions extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayUsers: false,
      ...this.buildEmojisAndAllUsers(props)
    };
    this.toggleDisplayUsers = this.toggleDisplayUsers.bind(this);
    this.displayUsers = this.displayUsers.bind(this);
    this.displayAllUsers = this.displayAllUsers.bind(this);
  }

  buildEmojisAndAllUsers({ reactions, username }) {
    const emojis = {};
    const users = {};
    for (({ emoji_name, emoji_code, user }) of reactions) {
      if (!emojis[emoji_code]) {
        emojis[emoji_code] = {
          emojiName: emoji_name,
          emojiCode: emoji_code,
          userHasReacted: false,
          users: [],
        };
      }
      if (user.email === username) {
        emojis[emoji_code].userHasReacted = true;
      }
      users[user.email] = user;
      emojis[emoji_code].users.push(user);
    }
    const allUsers = Object.values(users);
    return { emojis, allUsers, users: allUsers };
  }

  componentWillReceiveProps(props) {
    this.setState(this.buildEmojisAndAllUsers(props));
  }

  toggleDisplayUsers() {
    this.setState(({  displayUsers }) => {
      return { displayUsers: !displayUsers };
    });
  }

  displayUsers(emojiCode) {
    this.setState(({ emojis }) => ({users: emojis[emojiCode].users}));
  }

  displayAllUsers() {
    this.setState(({ allUsers }) => ({users: allUsers}));
  }

  render() {
    return <div style={style} onMouseEnter={this.toggleDisplayUsers} onMouseLeave={this.toggleDisplayUsers} >
      <ReactionsList emojis={Object.values(this.state.emojis)}
        displayUsers={this.displayUsers}
        displayAllUsers={this.displayAllUsers}
        messageID={this.props.messageID}
      />
      <ReactionUsers users={this.state.users} shouldDisplay={this.state.displayUsers} />
    </div>;
  }
}

export default connect(
  ({config}) => ({username: config.username}),
)(Reactions);
