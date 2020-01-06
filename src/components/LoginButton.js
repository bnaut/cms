import React from 'react'
import PropTypes from 'prop-types'

const LoginButton = ({ loggedIn, login }) => {
  console.log(loggedIn)
return (
  <div>
    <span>gusd </span>
    <span>{loggedIn.toString()}</span>
    <span 
      onClick={() => login(!loggedIn)}
    > Login</span>
  </div>
)
}

LoginButton.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

export default LoginButton
