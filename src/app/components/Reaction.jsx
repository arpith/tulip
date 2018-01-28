import React from 'react';
import EmojiConverter from 'emoji-js';
import { wrapper, count } from '../styles/reaction';

export default ({ emojiName, users }) => {
  const emojiConverter = new EmojiConverter();
  const reactionEmoji = emojiConverter.replace_colons(`:${emojiName}:`);
  return (<div style={wrapper}>
    <div>{reactionEmoji}</div>
    <div style={count}>{users.length}</div>
  </div>);
}
