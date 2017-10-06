import React from 'react';

const style = {
  WebkitAppearance: 'none',
  fontFamily: 'inherit',
  fontSize: '1em',
  fontWeight: '300',
  color: '#fff',
  background: '#00A2FF',
  padding: '0.6em',
  paddingLeft: '1em',
  paddingRight: '1em',
  margin: '0.2em',
  borderRadius: '0.2em',
  border: 'thin solid #00A2FF',
  cursor: 'pointer',
};

export default ({ onclick, value }) => <button
  style={style}
  onclick={onclick}>
  {value}
</button>;
