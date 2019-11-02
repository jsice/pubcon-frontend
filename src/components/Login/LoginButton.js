import React from 'react'
const LoginButton = props => <div> <button onClick={props.onClick()}>{ props.status?<span>Signout</span>:<span>Signin with Google</span>}</button></div>;

export default LoginButton