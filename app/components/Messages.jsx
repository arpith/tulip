import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

function Messages({ messages }) {
  const message = (m) => <Message message={m} key={m.id} />;
  const style = {
    flex: 3,
    overflowX: 'scroll',
    paddingRight: '0.8em',
    marginRight: '0.8em',
    height: '100%'
  };
  return (
    <div style={style}>
      {messages.map(message)}
    </div>
  );
}

export default connect(state => ({messages: state.messages}))(Messages);
