import React from 'react';

class Button extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      fontSize: '1.2em',
      background: '#4A525A',
      color: 'white',
      fontWeight: '300',
      padding: '0.3em',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginRight: '0.1em',
      border: 'thin solid #4A525A',
      borderRadius: '0.2em',
      cursor: 'pointer',
      float: 'left',
      clear: 'both'
    };
 
    return <button style={style}>{this.props.value}</button>;
  }
}

export default Button;
