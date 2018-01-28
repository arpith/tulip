import React from 'react';
import Reaction from './Reaction';
import style from '../styles/reactions';

export default ({ reactions }) => {
  const reactionsUsers = {};
  reactions.forEach(({ emoji_name, user }) => {
    if (!reactionsUsers[emoji_name]) {
      reactionsUsers[emoji_name] = [user];
    } else {
      reactionsUsers[emoji_name].push(user);
    }
  });
  return <div style={style}>
    {Object.entries(reactionsUsers).map(([ emojiName, users ]) => {
      return <Reaction emojiName={emojiName} users={users} key={emojiName} />;
    })}
  </div>;
}
