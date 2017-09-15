import React from 'react';
import { connect } from 'react-redux';

function Streams({ streams }) {
  const style = { paddingLeft: '1.6em', fontSize: '0.8em' };
  const stream = (s) => <div key={s.stream_id}>{s.name}</div>;
  return <div style={style}>{streams.map(stream)}</div>;
}

export default connect((state) => {
  return {streams: state.streams};
})(Streams);
