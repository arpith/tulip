import React from 'react';
import { wrapper, dot } from '../styles/threadSubject';

export default ({ subject }) => {
  if (subject) {
    return <div style={wrapper}>
      <div style={dot}>&middot;</div>
      <div>{subject}</div>
    </div>;
  }
  return null;
}
