import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

//  domain infos
 firebase.initializeApp({
   apiKey: "AIzaSyDNI0LkeClBI5GuXkryM-O4beKoiicSmhE",
   authDomain: "celebrity-school-4325a.firebaseapp.com",
   databaseURL: "https://celebrity-school-4325a.firebaseio.com",
   projectId: "celebrity-school-4325a",
   storageBucket: "celebrity-school-4325a.com",
   messagingSenderId: "305461072170",
   appId: "AAAARx7mESo:APA91bFzLip3udBh1LrjoTQeH9_5ZBgWebBvCweT2crZaZjzg_v1PeRHvsGGcarj9wyKSbMvTz0iCUKqPaMwU9NcLC4Pw2IqX2uuXqCrDLPI584JaVe7QEPzge23cPNcKVpAMGi6ZJyW",
 })


class Login extends Component {
  state = { isSignedIn: false }
  // signin button make a popup on top and then redirect
  uiConfig = {
    signInFlow: "popup",
    // here are the PROVIDERS we use, if we want add more, we add a ligne with new PROVIDER
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    // the State change depending on if we are signed in or not
    return (
      <div className="Login">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          </span>

        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    )
  }
}

export default Login
