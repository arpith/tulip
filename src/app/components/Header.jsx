import React from 'react';
import CurrentSubject from './CurrentSubject';
import Search from './Search';
import Logo from './Logo';
import Icons from './Icons';
import header from '../styles/header';
import centerColumn from '../styles/centerColumn';

class Header extends React.Component {
  state = {
    center: <CurrentSubject />,
    hidden: <Search />
  };
  render() {
    function toggleCenter() {
      this.setState({ 
        center: this.state.hidden,
        hidden: this.state.center
      });
    }
    return (
      <div style={header}>
        <Logo />
        <div style={centerColumn}>
          {this.state.center}
        </div>
        <Icons showSearch={toggleCenter} />
      </div>
    );
  }
}

export default Header;
