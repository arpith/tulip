import React from 'react';

const divStyle = {
  display: 'flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1.2em',
  width: 50
};

export default ({ url, hidden, small }) => {
  let content = <div style={{ width: 50 }}></div>;
  const imgStyle = {
    height: 50,
    borderRadius: '50%'
  };
  if (small === true) {
    imgStyle.height = 30;
  }
  if (!hidden) {
    content = <img style={imgStyle} src={url} />;
  }
  return <div style={divStyle}>{content}</div>;
}
