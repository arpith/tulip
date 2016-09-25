import React from 'react';
import Streams from './Streams.jsx';
import Messages from './Messages.jsx';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Streams />
        <Messages />
      </div>
    );
  }
}

export default HomePage;
