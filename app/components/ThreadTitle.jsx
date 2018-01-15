import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 78,
  fontWeight: 500,
};

const dotStyle = {
  marginLeft: 4,
  marginRight: 4,
};

export default ({ display_recipient, subject }) => <div style={style}>
  <div>{display_recipient}</div>
  <div style={dotStyle}>&middot;</div>
  <div>{subject}</div>
</div>;
