import React from 'react';

const divStyle = {
  alignSelf: 'flex-start',
  marginRight: '1.2em'
};

const imgStyle = {
  height: 50,
  borderRadius: '50%'
};

export default ({ url, hidden, small }) => {
  let content = <div style={{ width: 50 }}></div>;
  if (small) {
    imgStyle.height = 20;
  }
  if (!hidden) {
    content = <img style={imgStyle} src={url} />;
  }
  return <div style={divStyle}>{content}</div>;
}
