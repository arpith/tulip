import React from 'react';
import uuid from 'uuid';
import Label from './Label';
import TextInput from './TextInput';

const style = {
  flex: 1,
  flexWrap: 'wrap',
};

export default (props) => {
  const id = uuid.v4();
  return (<div style={style}>
    <Label htmlFor={id} value={props.labelValue} />
    <TextInput id={id}
      name={props.name}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      type={props.type}
    />
  </div>);
};
