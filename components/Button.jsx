import React from 'react';

class Button extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      background: 'white',
      background: '#4A525A',
      borderColor: '#4A525A',
      color: 'white',
      fontWeight: '300',
      border: 'thin solid',
      fontSize: '0.8em',
      padding: '0.2em',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginRight: '0.1em',
      borderRadius: '0.2em',
      cursor: 'pointer'
    };
 
    return <button style={style}>{this.props.value}</button>;
  }
}

export default Button;
