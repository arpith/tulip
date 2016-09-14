import zulip from 'zulip-js';
import { SIGN_IN, UPDATE_STREAMS} from '../constants.js';

export function signin(config, redirect) {
  return (dispatch, getState) => {
    zulip(config).then(zulip => {
      dispatch({
        type: SIGN_IN,
        config: zulip.config
      });
      fetchStreams(redirect)(dispatch, getState);
    });
  };
};

export function fetchStreams(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    const z = zulip(config);
    z.streams.retrieve().then(res => {
      console.log("after retrieve");
      console.log(res);
      dispatch({
        type: UPDATE_STREAMS,
        streams: res.streams
      });
      if (redirect) redirect();
      });
  };
};
