import React from 'react';

class TextInput extends React.Component {
  render() {
    const base = this.props.size || 1;
    const size = (ratio=1) => base *  ratio + 'em';
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      fontWeight: '300',
      border: 'thin solid #D6D5D5',
      color: 'white',
      fontSize: size(),
      background: 'none',
      padding: size(0.2),
      margin: size(0.2),
      paddingLeft: size(0.4),
      paddingRight: size(0.4),
      marginRight: size(0.1),
      borderRadius: size(0.2),
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
