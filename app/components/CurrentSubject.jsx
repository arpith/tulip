import React from 'react';
import { connect } from 'react-redux';

function CurrentSubject({ subject }) {
  return <div>{subject}</div>;
}

export default connect((state) => {
  return state.current_message;
})(CurrentSubject);
