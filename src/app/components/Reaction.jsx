import React from 'react';
import { replaceColons } from '../emoji';
import style from '../styles/reaction';

export default ({ emojiName, users }) => {
  const reactionEmoji = replaceColons(`:${emojiName}:`);
  return <div style={style}>{reactionEmoji}</div>;
}
