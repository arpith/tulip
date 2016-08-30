import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.message.sender_full_name}</h3>
        <div>{moment(this.props.message.timestamp).fromNow()}</div>
        <img src={this.props.message.avatar_url}></img>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
