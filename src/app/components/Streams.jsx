import React from 'react';
import { connect } from 'react-redux';
import leftColumn from '../styles/leftColumn';

function Streams({ streams }) {
  const style = {...leftColumn, overflowX: 'scroll'};
  const stream = (s) => <div key={s.stream_id}>{s.name}</div>;
  return <div style={style}>{streams.map(stream)}</div>;
}

export default connect((state) => {
  return {streams: state.streams};
})(Streams);
