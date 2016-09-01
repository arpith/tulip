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

    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%',
    };

    return <img src={src} style={style} />;
  }
}

export default BackgroundImage;
