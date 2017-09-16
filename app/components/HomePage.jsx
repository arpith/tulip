import React from 'react';
import Streams from './Streams.jsx';
import Messages from './Messages.jsx';
import Users from './Users.jsx';
import Header from './Header.jsx';

class HomePage extends React.Component {
  render() {
    const style = { display: 'flex' };
    return (
      <div>
        <Header />
        <div style={style}>
          <Streams />
          <Messages />
          <Users />
        </div>
      </div>
    );
  }
}

export default HomePage;
