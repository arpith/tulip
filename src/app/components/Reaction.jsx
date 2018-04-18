import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replaceColons } from '../emoji';
import { addReaction, removeReaction } from '../actions';
import { style, hover } from '../styles/reaction';

class Reaction extends Component {
  constructor(props) {
    super(props);
    if (props.userHasReacted) {
      this.state = { style: hover };
    } else {
      this.state = { style };
    }
    this.onHover = this.onHover.bind(this);
  }

  onHover(shouldHighlight) {
    if (shouldHighlight) {
      this.setState({ style: hover });
    } else {
      this.setState({ style });
    }
    this.props.onHover();
  }

  render() {
    const reactionEmoji = replaceColons(`:${this.props.emojiName}:`);
    return <button style={this.state.style}
      onClick={() => {
        if (this.props.userHasReacted) {
          this.props.decrement();
        } else {
          this.props.increment();
        }
      }}
      onMouseEnter={() => this.onHover(true)}
      onMouseLeave={() => this.onHover(this.props.userHasReacted)}>
      {reactionEmoji}
    </button>;
  }
}

export default connect(null, (dispatch, { emojiName, messageID, emojiCode }) => ({
  increment: () => dispatch(addReaction(messageID, emojiName, emojiCode)),
  decrement: () => dispatch(removeReaction(messageID, emojiName, emojiCode)),
}))(Reaction);
