import React from 'react';

class App extends React.Component {
  render() {
    const style = {
      float: 'left',
      clear: 'left',
      color: 'white',
      fontWeight: '500',
      fontFamily: 'Helvetica Neue, Helvetica, sans',
    };
 
    return (
      <div style={style}>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default App
