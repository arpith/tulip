import React from 'react';

class Button extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      fontSize: '1.2em',
      color: '#4A525A',
      background: 'white',
      fontWeight: '700',
      padding: '0.2em',
      paddingLeft: '0.6em',
      paddingRight: '0.6em',
      margin: '0.2em',
      border: 'thin solid white',
      borderRadius: '0.2em',
      cursor: 'pointer',
      float: 'left',
      clear: 'both'
    };
 
    return <button style={style}>{this.props.value}</button>;
  }
}

export default Button;
