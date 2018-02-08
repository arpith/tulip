import React from 'react';
import { replaceColons } from '../emoji';
import style from '../styles/reaction';

export default ({ emojiName, onHover }) => {
  const reactionEmoji = replaceColons(`:${emojiName}:`);
  return <button style={style} onMouseEnter={onHover} onMouseLeave={onHover}>
    {reactionEmoji}
  </button>;
}
