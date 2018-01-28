import React from 'react';
import EmojiConverter from 'emoji-js';

export default ({ reactions }) => {
  const emoji = new EmojiConverter();
  const reactionEmojiNames = reactions.map(({ emoji_name }) => `:${emoji_name}: `).join(' ');
  const reactionEmojis = emoji.replace_colons(reactionEmojiNames);
  return (<div>
    {reactionEmojis}
  </div>);
}
