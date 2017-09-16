import React from 'react';
const style = {
  display: 'flex',
  flexDirection: 'row',
  flex: 1
};

const imgStyle = {
  height: 20,
  padding: 10
};

export default () => <div style={style}>
  <img src='/images/search.png' style={imgStyle} />
  <img src='/images/user.png' style={imgStyle} />
</div>;
