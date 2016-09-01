import zulip from 'zulip-js';
import {SIGN_IN} from '../constants.js';

export function signin(config, redirect) {
  return dispatch => {
    console.log("Going to call zulip!");
    console.log(config);
    zulip(config).then(zulip => {
      console.log(zulip.config);
      dispatch({
        type: SIGN_IN,
        config: zulip.config
      });
      if (redirect) redirect();
    });
  };
};
