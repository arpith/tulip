import React from 'react';
import { connect } from 'react-redux';

function Streams({ streams }) {
  const style = {
    paddingLeft: '1.6em',
    paddingRight: '0.8em',
    marginRight: '0.8em',
    flex: 1,
    height: '100%',
    overflowX: 'scroll'
  };
  const stream = (s) => <div key={s.stream_id}>{s.name}</div>;
  return <div style={style}>{streams.map(stream)}</div>;
}

export default connect((state) => {
  return {streams: state.streams};
})(Streams);
