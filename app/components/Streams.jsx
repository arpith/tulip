import React from 'react';
import { connect } from 'react-redux';

function Streams({ streams }) {
  const stream = (s) => <div key={s.stream_id}>{s.name}</div>;
  return <div>{streams.map(stream)}</div>;
}

export default connect((state) => {
  return {streams: state.streams};
})(Streams);
