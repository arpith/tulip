import React from 'react';
import Streams from './Streams';
import Messages from './Messages';
import Editor from './Editor';
import Users from './Users';
import Header from './Header';
import wrapper from '../styles/homePage';
import body from '../styles/body';
import centerColumn from '../styles/centerColumn';

class HomePage extends React.Component {
  render() {
    return (
      <div style={wrapper}>
        <Header />
        <div style={body}>
          <Streams />
          <div style={centerColumn}>
            <Messages />
            <Editor />
          </div>
          <Users />
        </div>
      </div>
    );
  }
}

export default HomePage;
