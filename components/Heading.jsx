import React from 'react';

class Heading extends React.Component {
  render() {
    const style = {
      fontFamily: 'PT Sans, sans',
      fontWeight: '700',
      fontSize: '3em',
      lineHeight: '1.2em'
    };
    return (
      <div style={style}>
        {this.props.text}
      </div>
    );
  }
}

export default Heading;
