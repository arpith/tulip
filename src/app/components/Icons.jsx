import React from 'react';
import search from '../../public/images/search.png';
import user from '../../public/images/user.png';
import rightColumn from '../styles/rightColumn';
import icons from '../styles/icons';
import icon from '../styles/icon';

export default () => <div style={rightColumn}>
  <div style={icons}>
    <img src={search} style={icon} />
    <img src={user} style={icon} />
  </div>
</div>;
