import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({ toggleLogin }) => {
  return (
    <span 
      onClick={() => toggleLogin()}
      style={{
        color: 'purple',
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
    >Toggle Login</span>
  )
};

LoginButton.propTypes = {
  toggleLogin: PropTypes.func.isRequired
};

export default LoginButton;
