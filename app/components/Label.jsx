import React from 'react';

const style = {
  flex: 1,
  textAlign: 'right',
  WebkitAppearance: 'none',
  fontFamily: 'inherit',
  fontWeight: '400',
  padding: '0.2em',
  paddingLeft: '0.4em',
  paddingRight: '0.4em',
};

export default ({ htmlFor, value }) => <label 
  htmlFor={htmlFor} 
  style={style}>
  {value}
</label>;
