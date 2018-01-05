import React from 'react';
import { throttle } from 'underscore';
import Avatar from './Avatar';
import Sender from './Sender';
import Timestamp from './Timestamp';

// see https://github.com/fkhadra/react-on-screen/blob/master/src/TrackVisibility.js
class Message extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.isRead = this.isRead.bind(this);
    this.throttledIsRead = throttle(this.isRead, 1000);
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
    const html = document.documentElement;
    const windowTop = window.innerHeight;
    const htmlTop = html.clientHeight;
    const viewHeight = windowTop || htmlTop;
    if (rect.bottom <= viewHeight) {
      this.props.markAsReadAndUpdatePointer(this.props.message.id);
      this.removeListener();
    }
  }

  render() {
    const markedupContent = {__html: this.props.message.content};
    const style = {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '1.6em'
    };
    return (
      <div style={style} ref={e => this.nodeRef = e}>
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
