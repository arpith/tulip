import React from 'react';
import Search from './Search';
import Logo from './Logo';
import Icons from './Icons';
import header from '../styles/header';
import centerColumn from '../styles/centerColumn';

class Header extends React.Component {
  state = {
    hidden: true
  };
  render() {
    function toggleSearch() {
      this.setState(({hidden}) => ({hidden: !hidden}));
    }
    return (
      <div style={header}>
        <Logo />
        <Search hidden={this.state.hidden} />
        <Icons showSearch={toggleSearch} />
      </div>
    );
  }
}

export default Header;
