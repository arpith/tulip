import React from 'react';
import Reaction from './Reaction';

function reaction(emoji, displayUsers, displayAllUsers, messageID) {
  return <Reaction key={emoji.emojiCode}
    messageID={messageID}
    onMouseEnter={() => displayUsers(emoji.emojiCode)}
    onMouseLeave={displayAllUsers}
    {...emoji}
  />;
}

export default ({ emojis, displayUsers, displayAllUsers, messageID }) => {
  return emojis.map(emoji => reaction(emoji, displayUsers, displayAllUsers, messageID));
};
