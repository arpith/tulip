import React from 'react';
import Label from './Label';
import TextInput from './TextInput';

const style = {
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
  flexWrap: 'wrap',
  backgroundColor: 'yellow'
};

const labelStyle = {
  flex: 1,
  display: 'flex',
  backgroundColor: 'red',
  justifyContent: 'center'
};

export default () => <div style={style}>
  <div style={labelStyle}>
    <Label value="Username" />
  </div>
  <TextInput />
  <div style={labelStyle}>
    <Label />
  </div>
</div>;
