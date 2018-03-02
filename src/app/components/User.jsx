import React from 'react';
import Status from './Status';
import Avatar from './Avatar';
import { wrapper, name } from '../styles/user';

export default function user({ email, is_active, full_name, avatar_url }) {
  return <div style={wrapper}>
    <Status isActive={is_active} />
    <div style={name}>{full_name}</div>
  </div>;
}
