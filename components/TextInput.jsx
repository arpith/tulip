import React from 'react';

class TextInput extends React.Component {
  render() {
    return <input id={this.props.id}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onChange={this.props.onChange}
    />;
  }
}

export default TextInput;
