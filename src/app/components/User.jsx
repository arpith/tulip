import React from 'react';
import Status from './Status';
import Avatar from './Avatar';
import { wrapper, name } from '../styles/user';

export default function user({ email, is_active, full_name, avatar_url }) {
  //<Status isActive={is_active} />
  return <div style={wrapper}>
    <Avatar imgSize="small" wrapperSize="small" url={avatar_url} />
    <div style={name}>{full_name}</div>
  </div>;
}
