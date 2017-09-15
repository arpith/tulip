import React from 'react';

class Avatar extends React.Component {
  render() {
    const style = {
      borderRadius: '50%',
      alignSelf: 'center'
    };
    return <img
      style={style}
      src={this.props.url}>
    </img>;
  }
}

export default Avatar;
