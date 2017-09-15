import React from 'react';

class TextInput extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      fontWeight: '300',
      border: 'thin solid #D6D5D5',
      color: 'white',
      fontSize: '1em',
      background: 'none',
      padding: '0.2em',
      margin: '0.2em',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginRight: '0.1em',
      borderRadius: '0.2em',
      float: 'left'
    };
    let type = this.props.type;
    if (!type) type = "text";
    return <input id={this.props.id}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onChange={this.props.onChange}
      style={style}
      type={type}
    />;
  }
}

export default TextInput;
