import React from 'react';
import { connect } from 'react-redux';

function Users({ users }) {
  const style = {
    flex: 1,
    height: '100%',
    paddingRight: '0.8em',
    marginRight: '0.8em',
    overflowY: 'scroll'
  };
  const user = (u) => <div key={u.email}>{u.full_name}</div>;
  return <div style={style}>{users.map(user)}</div>;
}

export default connect((state) => {
  return {users: state.users};
})(Users);
