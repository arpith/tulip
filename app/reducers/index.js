import { SIGN_IN, UPDATE_STREAMS, UPDATE_MESSAGES, UPDATE_USERS } from '../constants';

const initialState = {
  config: {},
  streams: [],
  messages: [],
  users: []
};

export function config(state, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.config;
    default:
      if (!state) return initialState.config;
      else return state;
  }
}

export function streams(state, action) {
  switch (action.type) {
    case UPDATE_STREAMS:
      return action.streams;
    default:
      if (!state) return initialState.streams;
      else return state;
  }
}

export function messages(state, action) {
  switch (action.type) {
    case UPDATE_MESSAGES:
      return action.messages;
    default:
      if (!state) return initialState.messages;
      else return state;
  }
}

export function users(state, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return actions.users;
    default:
      if (!state) return initialState.users;
      else return state;
  }
}
