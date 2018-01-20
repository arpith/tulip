import React from 'react';
import { connect } from 'react-redux';
import ThreadTitle from './ThreadTitle';
import Avatar from './Avatar';

function CurrentSubject(message) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 7
  };

  return <div style={style}>
    <Avatar url={message.avatar_url} small={true} />
    <ThreadTitle {...message} />
  </div>;
}

export default connect((state) => {
  return state.currentMessage;
})(CurrentSubject);
