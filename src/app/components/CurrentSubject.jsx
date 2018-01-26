import React from 'react';
import { connect } from 'react-redux';
import ThreadTitle from './ThreadTitle';
import Avatar from './Avatar';
import style from '../styles/currentSubject';

function CurrentSubject(message) {
  return <div style={style}>
    <Avatar url={message.avatar_url} small={true} hidden={!message.avatar_url} />
    <ThreadTitle {...message} />
  </div>;
}

export default connect((state) => {
  return state.currentMessage;
})(CurrentSubject);
