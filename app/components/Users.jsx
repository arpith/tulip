import React from 'react';
import { connect } from 'react-redux';

function Users({ users }) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    right: 0,
    paddingLeft: '1.6em',
    flex: 1,
    height: '100%',
    overflowY: 'scroll'
  };
  const user = (u) => <div key={u.email}>{u.full_name}</div>;
  return <div style={style}>{users.map(user)}</div>;
}

export default connect((state) => {
  return {users: state.users};
})(Users);
