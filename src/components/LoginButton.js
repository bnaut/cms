import React from 'react'
import PropTypes from 'prop-types'

const LoginButton = ({ loggedIn, toggleLogin }) => {
  console.log(loggedIn)

  return (
    <div>
      <span 
        onClick={() => toggleLogin()}
        style={{
          color: 'purple',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >Toggle Login</span>
    </div>
  )
}

LoginButton.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired
}

export default LoginButton
