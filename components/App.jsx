import React from 'react';

class App extends React.Component {
  render() {
    const style = {
      float: 'left',
      clear: 'left',
      color: 'white',
      fontWeight: '400',
      fontFamily: 'PT Sans, sans',
      width: '100%'
    };
 
    return (
      <div style={style}>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default App
