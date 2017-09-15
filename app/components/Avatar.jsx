import React from 'react';

const style = {
  borderRadius: '50%',
  alignSelf: 'flex-start',
  marginRight: '2em'
};

export default ({ url }) => <img style={style} src={url} />;
