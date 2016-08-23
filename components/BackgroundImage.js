class BackgroundImage extends React.Component {
  render() {
    const urls = [
      'https://hd.unsplash.com/photo-1469614369149-4f0c1468c331',
      'https://hd.unsplash.com/photo-1461176081794-1d14e06aed41',
      'https://hd.unsplash.com/photo-1468743428993-661b9309fa2c',
      'https://hd.unsplash.com/photo-1464245254346-067e4f8baaf2',
      'https://hd.unsplash.com/photo-1468245856972-a0333f3f8293'
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
