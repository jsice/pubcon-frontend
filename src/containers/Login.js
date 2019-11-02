import React, { useState } from "react"
import * as firebase from "firebase/app"
import firebaseApp from "../firebaseApp"
import LoginButton from "../components/Login/LoginButton"

const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

const Login = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    firebaseAppAuth.signInWithPopup(providers.googleProvider).then(({ user }) => {
      setUser(user)
    })
  }

  const logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
  }

  return (
    <div className="Login">
      <header className="Login-header">
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        <LoginButton status={user} onClick={user ? login : logout} />
      </header>
    </div>
  )
}

export default Login
