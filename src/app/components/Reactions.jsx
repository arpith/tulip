import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactionsList from './ReactionsList';
import ReactionUsers from './ReactionUsers';
import style from '../styles/reactions';

class Reactions extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [],
      displayUsers: false,
      ...this.buildEmojisAndAllUsers(props)
    };
    this.toggleDisplayUsers = this.toggleDisplayUsers.bind(this);
    this.displayUsers = this.displayUsers.bind(this);
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
    return { emojis, allUsers: Object.values(users) };
  }

  componentWillReceiveProps(props) {
    this.setState(this.buildEmojisAndAllUsers(props));
  }

  toggleDisplayUsers() {
    this.setState(({ allUsers, displayUsers }) => {
      if (!displayUsers) {
        return { users: allUsers, displayUsers: true };
      }
      return { displayUsers: false };
    });
  }

  displayUsers(emojiCode) {
    this.setState(({ emojis }) => ({users: emojis[emojiCode].users}));
  }

  render() {
    return <div style={style} onMouseEnter={this.toggleDisplayUsers} onMouseLeave={this.toggleDisplayUsers} >
      <ReactionsList emojis={Object.values(this.state.emojis)}
        onHover={this.displayUsers}
        messageID={this.props.messageID}
      />
      <ReactionUsers users={this.state.users} shouldDisplay={this.state.displayUsers} />
    </div>;
  }
}

export default connect(
  ({config}) => ({username: config.username}),
)(Reactions);
