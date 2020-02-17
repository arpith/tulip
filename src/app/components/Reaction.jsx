import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { replaceColons } from '../emoji';
import { addReaction, removeReaction } from '../actions';
import { style, hover } from '../styles/reaction';

class Reaction extends PureComponent {
  render() {
    const reactionEmoji = replaceColons(`:${this.props.emojiName}:`);
    const Button = styled.button`${style(this.props.userHasReacted)}`;
    return <Button onClick={() => {
      if (this.props.userHasReacted) {
        this.props.decrement();
      } else {
        this.props.increment();
      }
    }}
    onMouseEnter={this.props.onMouseEnter}
    onMouseLeave={this.props.onMouseLeave}>
      {reactionEmoji}
    </Button>;
  }
}

export default connect(null, (dispatch, { emojiName, messageID, emojiCode }) => ({
  increment: () => dispatch(addReaction(messageID, emojiName, emojiCode)),
  decrement: () => dispatch(removeReaction(messageID, emojiName, emojiCode)),
}))(Reaction);
