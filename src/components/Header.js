import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ loggedIn }) => (
  <div id='Header'>
    <Link to="/">H</Link>
    <Link to="/login">{loggedIn.toString()}</Link>
  </div>
)

export default Header
