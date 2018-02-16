import React, { Component } from 'react';
import Reaction from './Reaction';
import ReactionUsers from './ReactionUsers';
import style from '../styles/reactions';

export default class Reactions extends Component {
  constructor(props) {
    super(props);
    this.reactionsUsers = {};
    this.emojiNames = {};
    this.props.reactions.forEach(({ emoji_name, user, emoji_code }) => {
      this.emojiNames[emoji_code] = emoji_name;
      if (!this.reactionsUsers[emoji_code]) {
        this.reactionsUsers[emoji_code] = [user];
      } else {
        this.reactionsUsers[emoji_code].push(user);
      }
    });
    this.state = {
      displayUsers: false,
      users: []
    };
    this.toggleDisplayUsers = () => {
      if (!this.state.displayUsers) {
        const allUsers = [].concat(...Object.values(this.reactionsUsers));
        const uniqueUsers = {};
        for (const user of allUsers) {
          uniqueUsers[user.email] = user;
        }
        this.setState({ users: Object.values(uniqueUsers) });
      }
      this.setState({ displayUsers: !this.state.displayUsers });
    };
    this.displayUsers = (emojiCode) => this.setState({ users: this.reactionsUsers[emojiCode] });
  }

  render() {
    const reactions = Object.keys(this.reactionsUsers).map((emojiCode) => {
      return <Reaction key={emojiCode}
        emojiCode={emojiCode}
        emojiName={this.emojiNames[emojiCode]}
        messageID={this.props.messageID}
        onHover={() => this.displayUsers(emojiCode)}
      />;
    });
    return <div style={style} onMouseEnter={this.toggleDisplayUsers} onMouseLeave={this.toggleDisplayUsers} >
      {reactions}
      <ReactionUsers users={this.state.users} shouldDisplay={this.state.displayUsers} />
    </div>;
  }
}
