import React from 'react';
import { connect } from 'react-redux';
import ThreadTitle from './ThreadTitle';

function CurrentSubject(message) {
  return <div style={{ paddingTop: 7 }}>
    <ThreadTitle {...message} />
  </div>;
}

export default connect((state) => {
  return state.currentMessage;
})(CurrentSubject);
