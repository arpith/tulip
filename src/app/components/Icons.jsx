import React from 'react';
import search from '../../public/images/search.png';
import user from '../../public/images/user.png';

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
  <img src={search} style={imgStyle} />
  <img src={user} style={imgStyle} />
</div>;
