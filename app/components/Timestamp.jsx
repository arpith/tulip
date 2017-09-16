import React from 'react';
import moment from 'moment';

const style = {
  fontWeight: 200,
  color: '#929292'
};

export default ({ timestamp }) => <div style={style}>
  {moment(timestamp, 'X').fromNow()}
</div>;
