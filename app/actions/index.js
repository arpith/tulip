import zulip from 'zulip-js';
import { SIGN_IN, UPDATE_STREAMS } from '../constants.js';

export function fetchStreams(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    const z = zulip(config);
    z.streams.retrieve().then((res) => {
      dispatch({
        type: UPDATE_STREAMS,
        streams: res.streams,
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
      fetchStreams(redirect)(dispatch, getState);
    });
  };
}
