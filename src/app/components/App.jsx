import React from 'react';

class App extends React.Component {
  render() {
    const style = {
      float: 'left',
      clear: 'left',
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
