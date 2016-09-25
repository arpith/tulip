import React from 'react';
import { connect } from 'react-redux';

function Messages({ messages }) {
  const message = (m) => <div key={m.id}>{m}</div>;
  const style = {
    backgroundColor: '#FEFCFF'
  };
  return (
    <div style={style}>
      {messages.map(message)}
    </div>
  );
}

export default connect(state => ({messages: state.messages}))(Messages);
