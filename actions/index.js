import zulip from 'zulip-js';
import * from '../constants.js';

export function signin(options) {
  const {username, password, realm} = options;
  return dispatch => {
    zulip(options).then(zulip => dispatch({
      type: SIGN_IN,
      config: zulip.config
    }));
  };
};
