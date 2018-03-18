import {
  SIGN_IN,
  UPDATE_STREAMS,
  UPDATE_MESSAGES,
  UPDATE_USERS,
  UPDATE_POINTER,
  UPDATE_CURRENT_MESSAGE,
  UPDATE_SUBSCRIPTIONS,
} from '../constants';

const initialState = {
  config: {},
  streams: [],
  messages: [],
  users: [],
  pointer: 0,
  currentMessage: {},
  subscriptions: [],
};

function updateMessage(messages, message) {
  const storedMessage = messages.find(e => e.id === message.id);
  if (storedMessage === undefined) {
    messages.push(message);
  } else {
    Object.assign(storedMessage, message);
  }
}

export function config(state, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.config;
    default:
      if (!state) return initialState.config;
      return state;
  }
}

export function streams(state, action) {
  switch (action.type) {
    case UPDATE_STREAMS:
      return action.streams;
    default:
      if (!state) return initialState.streams;
      return state;
  }
}

export function messages(state, action) {
  switch (action.type) {
    case UPDATE_MESSAGES:
      for (const message of action.messages) {
        updateMessage(state, message);
      }
      return state.slice();
    default:
      if (!state) return initialState.messages;
      return state;
  }
}

export function users(state, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return action.users;
    default:
      if (!state) return initialState.users;
      return state;
  }
}

export function pointer(state, action) {
  switch (action.type) {
    case UPDATE_POINTER:
      return action.pointer;
    default:
      if (!state) return initialState.pointer;
      return state;
  }
}

export function currentMessage(state, action) {
  switch (action.type) {
    case UPDATE_CURRENT_MESSAGE:
      return action.message;
    default:
      if (!state) return initialState.currentMessage;
      return state;
  }
}

export function subscriptions(state, action) {
  switch (action.type) {
    case UPDATE_SUBSCRIPTIONS:
      return action.subscriptions;
    default:
      if (!state) return initialState.subscriptions;
      return state;
  }
}
