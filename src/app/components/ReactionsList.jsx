import React from 'react';
import Reaction from './Reaction';

function reaction(emoji, onHover, messageID) {
  return <Reaction key={emoji.emojiCode}
    messageID={messageID}
    onHover={() => onHover(emoji.emojiCode)}
    {...emoji}
  />;
}

export default ({ emojis, onHover, messageID }) => {
  return emojis.map(emoji => reaction(emoji, onHover, messageID));
};
