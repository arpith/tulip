import React from 'react';

class App extends React.Component {
  render() {
    const style = {
      width: '36em',
      maxWidth: '92%',
      margin: 'auto',
      padding: '2em',
      paddingTop: '0.4em',
    };

    return (
      <div>
      <h1>Tulip</h1>
      {React.cloneElement(this.props.children, {key: page})}
      </div>
    );
  }
}

export default App
