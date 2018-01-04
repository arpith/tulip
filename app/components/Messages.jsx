import React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'underscore';
import Message from './Message';
import { markAsRead } from '../actions';

const listeners = {};
const messagesToBeFlagged = [];

function addListener(listener) {
  const listenerID = Math.random();
  listeners[listenerID] = listener;
  return listenerID;
}

function removeListener(listenerID) {
  delete listeners[listenerID];
}

function onScroll() {
  Object.values(listeners).forEach(listener => listener());
}

function batchMarkAsRead(markAsRead) {
  return (id) => {
    messagesToBeFlagged.push(id);
    if (messagesToBeFlagged.length > 10) {
      const messages = messagesToBeFlagged.splice(0, 10);
      markAsRead(messages);
    }
  };
}

function Messages({ messages, markAsRead }) {
  const message = (m) => <Message message={m} 
    key={m.id} 
    addListener={addListener} 
    removeListener={removeListener}
    markAsRead={batchMarkAsRead(markAsRead)}/>;
  const style = {
    flex: 3,
    overflowX: 'scroll',
    paddingRight: '0.8em',
    marginRight: '0.8em',
    height: '100%'
  };
  const throttledOnScroll = throttle(onScroll, 1000);
  return (
    <div style={style} onScroll={throttledOnScroll}>
      {messages.map(message)}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    markAsRead: messages => {
      dispatch(markAsRead(messages))
    }
  }
}

export default connect(
  ({messages}) => ({messages}),
  mapDispatchToProps,
)(Messages);
