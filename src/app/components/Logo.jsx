import React from 'react';
import logo from '../../public/images/logo.png';
import leftColumn from '../styles/leftColumn';
import style from '../styles/logo';

export default () => <div style={leftColumn}>
  <img style={style} src={logo} />
</div>;
