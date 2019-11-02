import React from 'react'
import * as firebase from 'firebase/app'
import firebaseApp from '../firebaseApp'
import LoginButton from '../components/Login/LoginButton'

const firebaseAppAuth = firebaseApp.auth()
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {user: null}
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    login(){
        var that = this
        firebaseAppAuth.signInWithPopup(providers.googleProvider).then(function(result) {
            var user = result.user
            that.setState({user: user})
        }).catch(function(error) {
            var errorCode = error.code
            var errorMessage = error.message
            console.log("ERROR: " + errorCode + " " + errorMessage);
        })
    }

    logout(){
        var that = this
        firebaseApp.auth().signOut().then((result) => {
            that.setState({user: null})
        })
    }

    render(){
        return (
            <div className="Login">
                <header className="Login-header">
                {
                    this.state.user
                    ? <p>Hello, {this.state.user.displayName}</p>
                    : <p>Please sign in.</p>
                }
                <LoginButton status={this.state.user} onClick={this.state.user?this.login:this.logout}/>
                </header>
            </div>
        )
    }
}

export default Login