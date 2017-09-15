import React from 'react';
import moment from 'moment';

class Message extends React.Component {
  render() {
    const markedupContent = {__html: this.props.message.content};
    return (
      <div>
        <h3>{this.props.message.sender_full_name}</h3>
        <div>{moment(this.props.message.timestamp, 'X').fromNow()}</div>
        <img src={this.props.message.avatar_url}></img>
        <div dangerouslySetInnerHTML={markedupContent} />
      </div>
    );
  }
}

export default Message;
