import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = ({ }) => (
  <div id='Sidebar'>
    <span>Pages</span>
    <ul>
      <li><Link to='/pages/home'>Home</Link></li>
      <li><Link to='/pages/about'>About</Link></li>
      <li><Link to='/pages/contact'>Contact</Link></li>
    </ul>
  </div>
)

Sidebar.propTypes = {
}

export default Sidebar
