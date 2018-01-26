import React from 'react';
import moment from 'moment';
import style from '../styles/timestamp';

export default ({ timestamp }) => <div style={style}>
  {moment(timestamp, 'X').fromNow()}
</div>;
