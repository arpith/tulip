import React from 'react';
import Streams from './Streams.jsx';
import Messages from './Messages.jsx';

class HomePage extends React.Component {
  render() {
    const style = { display: 'flex' };
    return (
      <div style={style}>
        <Streams />
        <Messages />
      </div>
    );
  }
}

export default HomePage;
