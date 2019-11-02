import React from "react"
import PropTypes from "prop-types"

const LoginButton = ({ status, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        {status ? <span>Signout</span> : <span>Signin with Google</span>}
      </button>
    </div>
  )
}

LoginButton.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func,
}

export default LoginButton
