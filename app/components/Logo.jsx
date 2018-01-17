import React from 'react';

const divStyle = {
  alignSelf: 'flex-start',
  flex: 1,
};

const imgStyle = {
  paddingLeft: '1.6em',
  height: 40,
};

export default () => <div style={divStyle}>
  <img style={imgStyle} src="/images/logo.png" />
</div>;
