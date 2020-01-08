import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({ toggleLogin }) => {
  return (
    <span className='link' onClick={() => toggleLogin()}>Toggle Login</span>
  )
};

LoginButton.propTypes = {
  toggleLogin: PropTypes.func.isRequired
};

export default LoginButton;
