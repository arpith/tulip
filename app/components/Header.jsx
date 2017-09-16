import React from 'react';
import CurrentSubject from './CurrentSubject.jsx';
import Search from './Search.jsx';
import Logo from './Logo.jsx';
import Icons from './Icons.jsx';

class Header extends React.Component {
  state = {
    center: <CurrentSubject />,
    hidden: <Search />
  };
  render() {
    const style = { 
      display: 'flex',
      height: 40
    };
    function toggleCenter() {
      this.setState({ 
        center: this.state.hidden,
        hidden: this.state.center
      });
    }
    return (
      <div style={style}>
        <Logo />
        <div style={{flex: 3}}>
          {this.state.center}
        </div>
        <Icons showSearch={toggleCenter} />
      </div>
    );
  }
}

export default Header;
