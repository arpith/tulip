import React from 'react';
import style from '../styles/label';

export default ({ htmlFor, value }) => <label htmlFor={htmlFor} style={style}>
  {value}
</label>;
