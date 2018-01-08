import {
  SIGN_IN,
  UPDATE_STREAMS,
  UPDATE_MESSAGES,
  UPDATE_USERS,
  UPDATE_POINTER,
} from '../constants';

const initialState = {
  config: {},
  streams: [],
  messages: [],
  users: [],
  pointer: 0,
};

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
      return state.concat(action.messages);
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
