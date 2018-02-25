import React from 'react';
import { connect } from 'react-redux';
import leftColumn from '../styles/leftColumn';

function Streams({ streams, subscriptions }) {
  const style = {...leftColumn, overflowX: 'scroll'};
  const subscriptionIDs = subscriptions.map(s => s.stream_id);
  const diff = streams.filter(({ stream_id }) => !subscriptionIDs.includes(stream_id));
  const unified = subscriptions.concat(diff);
  const createDiv = (s) => <div key={s.stream_id}>{s.name}</div>;
  return <div style={style}>{unified.map(createDiv)}</div>;
}

export default connect(({ streams, subscriptions }) => {
  return { streams, subscriptions };
})(Streams);
