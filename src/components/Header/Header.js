import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ style, loggedIn }) => (
  <div id='Header' style={style}>
    <Link to="/">H</Link>
    <Link to="/login">{loggedIn.toString()}</Link>
  </div>
);

export default Header;
