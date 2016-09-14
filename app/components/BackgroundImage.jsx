import React from 'react';

class BackgroundImage extends React.Component {
  render() {
    const urls = [
      'https://hd.unsplash.com/photo-1464245254346-067e4f8baaf2',
      'https://hd.unsplash.com/photo-1468245856972-a0333f3f8293',
      'https://hd.unsplash.com/photo-1457200246108-d9d4abc27953',
      'https://hd.unsplash.com/photo-1464800959563-472c0567132f'
    ];
    
    const src = urls[Math.floor(Math.random() * urls.length)];

    const containerStyle = {
      zIndex: '-1',
      position: 'fixed',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%'
    };

    const imgStyle = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      minWidth: '50%',
      minHeight: '50%',
    };

    return (
      <div style={containerStyle}>
        <img src={src} style={imgStyle} />
      </div>
    );
  }
}

export default BackgroundImage;
