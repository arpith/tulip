import React from 'react';
import { img, wrapper } from '../styles/avatar';

export default ({ url, hidden, imgSize, wrapperSize }) => {
  let content = <div style={{ width: 50 }}></div>;
  if (!hidden) {
    content = <img style={img(imgSize)} src={url} />;
  }
  return <div style={wrapper(wrapperSize)}>{content}</div>;
}
