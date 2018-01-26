import React from 'react';
import { img, wrapper } from '../styles/avatar';

export default ({ url, hidden, small }) => {
  let content = <div style={{ width: 50 }}></div>;
  if (!hidden) {
    content = <img style={img(small)} src={url} />;
  }
  return <div style={wrapper}>{content}</div>;
}
