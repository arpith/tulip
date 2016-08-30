import React from 'react';

class Subheading extends React.Component {
  render() {
    const style = {
      fontFamily: 'inherit',
      fontSize: '1.5em',
      lineHeight: '1em',
    };
    return (
      <div style={style}>
        {this.props.text}
      </div>
    );
  }
}

export default Subheading;
