import React from 'react';
import { replaceColons } from '../emoji';
import style from '../styles/threadTitle';
import Recipients from './Recipients';
import ThreadSubject from './ThreadSubject';

export default ({ display_recipient, subject }) => {
  return <div style={style}>
    <Recipients recipients={display_recipient} />
    <ThreadSubject subject={replaceColons(subject)} />
  </div>;
}
