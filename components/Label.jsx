import React from 'react';

class TextInput extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      color: '#4A525A',
      fontWeight: '200',
      fontSize: '0.8em',
      padding: '0.2em',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginRight: '0.1em',
      float: 'left',
      clear: 'both',
    };
    return <label htmlFor={this.props.htmlFor} style={style}>{this.props.value}</label>;
  }
}

export default TextInput;
