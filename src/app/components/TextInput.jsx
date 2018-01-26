import React from 'react';
import style from '../styles/textInput';

export default ({ size, type, id, name, placeholder, onChange }) => {
  if (!type) type = "text";
  return <input id={id}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    style={style(size)}
    type={type}
  />;
}
