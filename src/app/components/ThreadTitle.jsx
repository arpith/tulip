import React from 'react';
import threadTitle from '../styles/threadTitle';
import dot from '../styles/dot';

export default ({ display_recipient, subject }) => <div style={threadTitle}>
  <div>{display_recipient}</div>
  <div style={dot}>&middot;</div>
  <div>{subject}</div>
</div>;
