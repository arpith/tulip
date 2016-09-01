import zulip from 'zulip-js';
import {SIGN_IN} from '../constants.js';

export function signin(config, redirect) {
  return dispatch => {
    zulip(config).then(zulip => {
      dispatch({
        type: SIGN_IN,
        config: zulip.config
      });
      if (redirect) redirect();
    });
  };
};
