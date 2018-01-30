import React from 'react';
import { replaceColons } from '../emoji';
import { wrapper, count } from '../styles/reaction';

export default ({ emojiName, users }) => {
  const reactionEmoji = replaceColons(`:${emojiName}:`);
  return (<div style={wrapper}>
    <div>{reactionEmoji}</div>
    <div style={count}>{users.length}</div>
  </div>);
}
