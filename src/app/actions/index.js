import zulip from 'zulip-js';
import {
  SIGN_IN,
  UPDATE_STREAMS,
  UPDATE_MESSAGES,
  UPDATE_USERS,
  UPDATE_POINTER,
  UPDATE_CURRENT_MESSAGE,
  UPDATE_SUBSCRIPTIONS,
} from '../constants';

export function updateCurrentMessage(message) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CURRENT_MESSAGE,
      message,
    });
  };
}

export function markAsRead(messages) {
  return (dispatch, getState) => {
    const { config } = getState();
    const flag = 'read';
    return zulip(config)
      .then(z => z.messages.flags.add({ flag, messages }));
  };
}

export function updatePointer(id) {
  return (dispatch, getState) => {
    const { config } = getState();
    return zulip(config)
      .then(z => z.users.me.pointer.update(id))
      .then(({ result }) => {
        if (result === 'success') {
          dispatch({
            type: UPDATE_POINTER,
            pointer: id,
          });
        }
      });
  };
}

export function fetchPointer(dispatch, config) {
  return zulip(config)
    .then(z => z.users.me.pointer.retrieve())
    .then(({ pointer}) => {
      dispatch({
        type: UPDATE_POINTER,
        pointer,
      });
      return pointer;
    });
}

export function fetchSubscriptions(redirect) {
  return (dispatch, getState) => {
    const { config } = getState();
    return zulip(config)
      .then(z => z.streams.subscriptions.retrieve())
      .then(({ subscriptions }) => {
        dispatch({
          type: UPDATE_SUBSCRIPTIONS,
          subscriptions,
        });
        if (redirect) redirect();
      });
  };
}

export function fetchStreams(redirect) {
  return (dispatch, getState) => {
    const { config } = getState();
    return zulip(config)
      .then(z => z.streams.retrieve())
      .then((res) => {
        dispatch({
          type: UPDATE_STREAMS,
          streams: res.streams,
        });
        if (redirect) redirect();
      });
  };
}

export function fetchMessages(anchor) {
  return (dispatch, getState) => {
    const { config, messages } = getState();
    const params = {
      num_before: 10,
      num_after: 20,
      anchor,
    };
    if (!anchor) {
      const lastMessage = messages[messages.length - 1];
      params.num_before = 0;
      params.anchor = lastMessage.id;
    }
    return zulip(config)
      .then(z => z.messages.retrieve(params))
      .then((res) => {
        dispatch({
          type: UPDATE_MESSAGES,
          messages: res.messages,
        });
      });
  };
}

export function fetchUsers(redirect) {
  return (dispatch, getState) => {
    const { config } = getState();
    return zulip(config)
      .then(z => z.users.retrieve({}))
      .then((res) => {
        const users = [].concat(res.members);
        dispatch({
          type: UPDATE_USERS,
          users,
        });
        if (redirect) redirect();
      });
  };
}

export function signin(configWithPassword, redirect) {
  return (dispatch, getState) => {
    zulip(configWithPassword).then(({ config }) => {
      dispatch({
        type: SIGN_IN,
        config,
      });
      fetchPointer(dispatch, config).then((pointer) => {
        fetchMessages(pointer)(dispatch, getState);
      });
      fetchSubscriptions()(dispatch, getState);
      fetchStreams()(dispatch, getState);
      fetchUsers()(dispatch, getState);
      if (redirect) redirect();
    });
  };
}
