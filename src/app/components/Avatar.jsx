import React from 'react';
import { img, wrapper } from '../styles/avatar';

export default ({ url, hidden, imgSize, wrapperSize, sticky }) => {
  let content = <div style={{ width: 50 }}></div>;
  if (!hidden) {
    content = <img style={img(imgSize)} src={url} />;
  }
  if (sticky) {
    return <div style={{...wrapper(wrapperSize), position: 'sticky', top: 0}}>
      {content}
    </div>;
  }
  return <div style={wrapper(wrapperSize)}>{content}</div>;
}
