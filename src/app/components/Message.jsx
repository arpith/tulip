import React from 'react';
import { throttle } from 'underscore';
import EmojiConverter from 'emoji-js';
import Avatar from './Avatar';
import Sender from './Sender';
import Timestamp from './Timestamp';
import ThreadTitle from './ThreadTitle';
import AvatarBlank from './AvatarBlank';

// see https://github.com/fkhadra/react-on-screen/blob/master/src/TrackVisibility.js
class Message extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.isRead = this.isRead.bind(this);
    this.throttledIsRead = throttle(this.isRead, 1000);
    this.state = {};
  }

  componentDidMount() {
    this.attachListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  removeListener() {
    this.props.removeListener(this.state.listenerID);
  }

  attachListener() {
    const listenerID = this.props.addListener(this.throttledIsRead);
    this.setState({listenerID});
  }

  isRead() {
    const rect = this.nodeRef.getBoundingClientRect();
    if (rect.top > 30) {
      this.setState({ hideAvatar: false });
    }
    if ((rect.top < 30) && (rect.bottom > 30)) {
      this.props.updateHeader(this.props.message);
      this.setState({ hideAvatar: true });
    }
    if (rect.bottom < 30) {
      this.props.updateHandler(this.props.message.id);
      this.removeListener();
    }
  }

  render() {
    const emoji = new EmojiConverter();
    const contentWithEmojis = emoji.replace_colons(this.props.message.content);
    const markedupContent = {__html: contentWithEmojis};
    const rowFlex = {
      display: 'flex',
      flexDirection: 'row',
    };
    const columnFlex = {
      display: 'flex',
      flexDirection: 'column'
    };
    const style = { marginBottom: '1.6em', ...columnFlex };
    return (
      <div style={style} ref={e => this.nodeRef = e}>
        <div style={rowFlex}>
          <AvatarBlank />
          <ThreadTitle {...this.props.message} />
        </div>
        <div style={rowFlex}>
          <Avatar url={this.props.message.avatar_url} hidden={this.state.hideAvatar} />
          <div>
            <div style={rowFlex}>
              <Sender name={this.props.message.sender_full_name} />
              <Timestamp timestamp={this.props.message.timestamp} />
            </div>
            <div dangerouslySetInnerHTML={markedupContent} className="messageContent" />
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
