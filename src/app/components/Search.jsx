import React from 'react';
import TextInput from './TextInput';

export default (hidden) => {
  if (hidden) {
    return <div style={{height: 0}}></div>
  }
  return <TextInput size={1.6} />;
}
