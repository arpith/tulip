import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replaceColons } from '../emoji';
import { addReaction } from '../actions';
import { style, hover } from '../styles/reaction';

class Reaction extends Component {
  state = { style };

  onHover = (shouldHighlight) => {
    if (shouldHighlight) {
      this.setState({ style: hover });
    } else {
      this.setState({ style });
    }
    this.props.onHover();
  };

  render() {
    const reactionEmoji = replaceColons(`:${this.props.emojiName}:`);
    return <button style={this.state.style}
      onClick={this.props.increment}
      onMouseEnter={() => this.onHover(true)}
      onMouseLeave={() => this.onHover(false)}>
      {reactionEmoji}
    </button>;
  }
}

export default connect(null, (dispatch, { emojiName, messageID, emojiCode }) => ({
  increment: () => dispatch(addReaction(messageID, emojiName, emojiCode)),
}))(Reaction);
