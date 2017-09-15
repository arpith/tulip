import React from 'react';
import moment from 'moment';
import Avatar from './Avatar';

class Message extends React.Component {
  render() {
    const markedupContent = {__html: this.props.message.content};
    return (
      <div>
        <h3>{this.props.message.sender_full_name}</h3>
        <div>{moment(this.props.message.timestamp, 'X').fromNow()}</div>
        <Avatar url={this.props.message.avatar_url} />
        <div dangerouslySetInnerHTML={markedupContent} />
      </div>
    );
  }
}

export default Message;
