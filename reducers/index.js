import {SIGN_IN} from '../constants';

const initialState = {
  config: {},
  streams: [],
  messages: [],
  users: []
};

const actionHandlers = {
  [SIGN_IN]: (state, action) => ({ config: action.config })
};

function createReducer (initialState, actionHandlers) {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];
    if (!reduceFn) return state;
    return { ...state, ...reduceFn(state, action) };
  };
}

export default createReducer(initialState, actionHandlers);
