import React from 'react';
import Streams from './Streams';
import Messages from './Messages';
import Users from './Users';
import Header from './Header';

class HomePage extends React.Component {
  render() {
    const style = { display: 'flex', height: window.innerHeight - 40 };
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
