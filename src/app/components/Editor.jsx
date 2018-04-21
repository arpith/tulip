import React from 'react';
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror';
 
export default ({ value, onChange }) => <HtmlEditor
  value={value}
  onChange={onChange}
/>;
