import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.initialValue};
  }

  onStateChange(e, callback) {
    this.setState({value: e.target.value});
    callback(e.target.value);
  }

  render() {
    return <input id={this.props.id}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onChange={e => onStateChange(e, this.props.callback)}
      value={this.state.value}>
    </input>;
  }
}

export default TextInput;
