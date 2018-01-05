import React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'underscore';
import Message from './Message';
import { markAsRead, updatePointer } from '../actions';

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

function batchMarkAsReadAndUpdatePointer(markAsRead, updatePointer) {
  return (id) => {
    messagesToBeFlagged.push(id);
    if (messagesToBeFlagged.length > 10) {
      const messages = messagesToBeFlagged.splice(0, 10);
      const lastID = messages[messages.length - 1];
      markAsRead(messages);
      updatePointer(lastID);
    }
  };
}

function Messages({ messages, markAsRead, updatePointer }) {
  const message = (m) => <Message message={m} 
    key={m.id} 
    addListener={addListener} 
    removeListener={removeListener}
    markAsReadAndUpdatePointer={batchMarkAsReadAndUpdatePointer(markAsRead, updatePointer)}
  />;
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
    },
    updatePointer: messages => {
      dispatch(updatePointer(messages))
    },
  }
}

export default connect(
  ({messages}) => ({messages}),
  mapDispatchToProps,
)(Messages);
