import React from 'react';
import style from '../styles/button';

export default ({ onclick, value }) => <button style={style} onClick={onclick}>
  {value}
</button>;
