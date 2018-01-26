import React from 'react';
import { connect } from 'react-redux';
import rightColumn from '../styles/rightColumn';

function Users({ users }) {
  const style = {...rightColumn, overflowY: 'scroll' };
  const user = (u) => <div key={u.email}>{u.full_name}</div>;
  return <div style={style}>{users.map(user)}</div>;
}

export default connect((state) => {
  return {users: state.users};
})(Users);
