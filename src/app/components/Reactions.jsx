import React, { Component } from 'react';
import Reaction from './Reaction';
import ReactionUsers from './ReactionUsers';
import style from '../styles/reactions';

export default class Reactions extends Component {
  constructor(props) {
    super(props);
    this.reactionsUsers = {};
    this.props.reactions.forEach(({ emoji_name, user }) => {
      if (!this.reactionsUsers[emoji_name]) {
        this.reactionsUsers[emoji_name] = [user];
      } else {
        this.reactionsUsers[emoji_name].push(user);
      }
    });
    this.state = {
      displayUsers: false,
      users: []
    };
    this.toggleDisplayUsers = () => {
      if (!this.state.displayUsers) {
        const allUsers = [].concat(...Object.values(this.reactionsUsers));
        const uniqueUsers = new Set(allUsers)
        this.setState({ users: Array.from(uniqueUsers) });
      }
      this.setState({ displayUsers: !this.state.displayUsers });
    };
    this.displayUsers = (emojiName) => this.setState({ users: this.reactionsUsers[emojiName] });
  }

  render() {
    const reactions = Object.keys(this.reactionsUsers).map((emojiName) => {
      return <Reaction emojiName={emojiName} key={emojiName} onHover={() => this.displayUsers(emojiName)} />;
    });
    return <div style={style} onMouseEnter={this.toggleDisplayUsers} onMouseLeave={this.toggleDisplayUsers} >
      {reactions}
      <ReactionUsers users={this.state.users} shouldDisplay={this.state.displayUsers} />
    </div>;
  }
}
