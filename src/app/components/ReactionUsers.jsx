import React from 'react';
import style from '../styles/reactionUsers';

export default ({ users, shouldDisplay }) => {
  const names = users.map(user => user.full_name);
  let joinedNames = names.slice(0, 2).join(', ');
  if (names.length > 3) {
    joinedNames += ` and ${names.length - 2} others`;
  } else if ((names.length === 2) || (names.length === 3)) {
    joinedNames = names.slice(0, names.length - 1).join(', ');
    joinedNames += ` and ${names[names.length - 1]}`;
  }
  let display = 'none';
  if (shouldDisplay) {
    display = 'flex';
  }
  return <div style={{...style, display}}>{joinedNames}</div>;
}
