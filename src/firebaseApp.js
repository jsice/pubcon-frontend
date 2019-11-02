import * as firebase from "firebase"
import config from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp
