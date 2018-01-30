import React from 'react';
import { throttle } from 'underscore';
import Avatar from './Avatar';
import Sender from './Sender';
import Timestamp from './Timestamp';
import ThreadTitle from './ThreadTitle';
import AvatarBlank from './AvatarBlank';
import Reactions from './Reactions';
import { replaceColons } from '../emoji';
import { row, column } from '../styles/flex';
import { headerHeight, threadTitleHeight } from '../styles/dimensions';

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
    const bodyTop = headerHeight;
    const messageContentTop = rect.top + threadTitleHeight;
    if (messageContentTop > bodyTop) {
      this.setState({ hideAvatar: false });
    }
    if ((messageContentTop < bodyTop) && (rect.bottom > bodyTop)) {
      this.props.updateHeader(this.props.message);
      this.setState({ hideAvatar: true });
    }
    if (rect.bottom < bodyTop) {
      this.props.updateHandler(this.props.message.id);
      this.removeListener();
    }
  }

  render() {
    const contentWithEmojis = replaceColons(this.props.message.content);
    const markedupContent = {__html: contentWithEmojis};
    const style = { marginBottom: '1.6em', ...column };
    return (
      <div style={style} ref={e => this.nodeRef = e}>
        <div style={row}>
          <AvatarBlank />
          <ThreadTitle {...this.props.message} />
        </div>
        <div style={row}>
          <Avatar url={this.props.message.avatar_url} hidden={this.state.hideAvatar} />
          <div>
            <div style={row}>
              <Sender name={this.props.message.sender_full_name} />
              <Timestamp timestamp={this.props.message.timestamp} />
            </div>
            <div dangerouslySetInnerHTML={markedupContent} className="messageContent" />
            <Reactions reactions={this.props.message.reactions} />
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
