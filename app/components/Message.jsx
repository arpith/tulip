import React from 'react';
import Avatar from './Avatar';
import Sender from './Sender';
import Timestamp from './Timestamp';

class Message extends React.Component {
  render() {
    const markedupContent = {__html: this.props.message.content};
    const style = {
      display: 'flex',
      flexDirection: 'row'
    };
    return (
      <div style={style}>
        <Avatar url={this.props.message.avatar_url} />
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Sender name={this.props.message.sender_full_name} />
            <Timestamp timestamp={this.props.message.timestamp} />
          </div>
          <div dangerouslySetInnerHTML={markedupContent} />
        </div>
      </div>
    );
  }
}

export default Message;
