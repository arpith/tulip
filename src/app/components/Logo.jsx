import React from 'react';
import logo from '../../public/images/logo.png';

const divStyle = {
  alignSelf: 'flex-start',
  flex: 1,
};

const imgStyle = {
  paddingLeft: '1.6em',
  height: 40,
};

export default () => <div style={divStyle}>
  <img style={imgStyle} src={logo} />
</div>;
