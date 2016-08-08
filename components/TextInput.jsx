import React from 'react';

class TextInput extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      background: 'white',
      color: '#4A525A',
      borderColor: '#D1D0CE'
    };
    return <input id={this.props.id}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onChange={this.props.onChange}
      style={style}
      type="text"
    />;
  }
}

export default TextInput;
