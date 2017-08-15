import zulip from 'zulip-js';
import { SIGN_IN, UPDATE_STREAMS, UPDATE_MESSAGES } from '../constants.js';

export function fetchStreams(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    const z = zulip(config);
    return z.streams.retrieve().then((res) => {
      dispatch({
        type: UPDATE_STREAMS,
        streams: res.streams,
      });
      if (redirect) redirect();
    });
  };
}

export function fetchMessages(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    const z = zulip(config);
    const params = {
      num_before: 10,
      num_after: 10,
    };
    return z.users.me.pointer.retrieve().then((res) => {
      params.anchor = res.pointer;
      return z.messages.retrieve(params);
    }).then((res) => {
      dispatch({
        type: UPDATE_MESSAGES,
        messages: res.messages,
      });
      if (redirect) redirect();
    });
  };
}

export function signin(config, redirect) {
  return (dispatch, getState) => {
    zulip(config).then((client) => {
      dispatch({
        type: SIGN_IN,
        config: client.config,
      });
      fetchMessages()(dispatch, getState);
      fetchStreams()(dispatch, getState);
      if (redirect) redirect();
    });
  };
}
