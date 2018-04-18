import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactionsList from './ReactionsList';
import ReactionUsers from './ReactionUsers';
import style from '../styles/reactions';

class Reactions extends Component {
  constructor(props) {
    super(props);
    this.emojis = {};
    this.users = {};
    for (({ emoji_name, emoji_code, user }) of props.reactions) {
      if (!this.emojis[emoji_code]) {
        this.emojis[emoji_code] = {
          emojiName: emoji_name,
          emojiCode: emoji_code,
          userHasReacted: false,
          users: [],
        };
      }
      if (user.email === this.props.username) {
        this.emojis[emoji_code].userHasReacted = true;
      }
      this.users[user.email] = user;
      this.emojis[emoji_code].users.push(user);
    }
    this.state = {
      displayUsers: false,
      users: []
    };
    this.toggleDisplayUsers = this.toggleDisplayUsers.bind(this);
    this.displayUsers = this.displayUsers.bind(this);
  }

  toggleDisplayUsers() {
    if (!this.state.displayUsers) {
      this.setState({ users: Object.values(this.users) });
    }
    this.setState({ displayUsers: !this.state.displayUsers });
  }

  displayUsers(emojiCode) {
    this.setState({ users: this.emojis[emojiCode].users });
  }

  render() {
    return <div style={style} onMouseEnter={this.toggleDisplayUsers} onMouseLeave={this.toggleDisplayUsers} >
      <ReactionsList emojis={Object.values(this.emojis)}
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
