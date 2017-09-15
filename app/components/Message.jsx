import React from 'react';
import moment from 'moment';
import Avatar from './Avatar';
import Sender from './Sender';

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
          <Sender name={this.props.message.sender_full_name} />
          <div>{moment(this.props.message.timestamp, 'X').fromNow()}</div>
          <div dangerouslySetInnerHTML={markedupContent} />
        </div>
      </div>
    );
  }
}

export default Message;
