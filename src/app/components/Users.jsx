import React from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized'
import User from './User';
import rightColumn from '../styles/rightColumn';

function Users({ users }) {
  const style = {...rightColumn, overflowY: 'scroll' };
  const user = (u) => <User {...u} key={u.email} />;
  return <div style={style}>{users.map(user)}</div>;
}

export default connect((state) => {
  return {users: state.users};
})(Users);
