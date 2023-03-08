import firebase from 'firebase/compat/app'
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_4OxaExyUHLkbwMsnFOw7KrNlJPz2YbY",
  authDomain: "cleannation-ec03a.firebaseapp.com",
  projectId: "cleannation-ec03a",
  storageBucket: "cleannation-ec03a.appspot.com",
  messagingSenderId: "985678848655",
  appId: "1:985678848655:web:42d98ee0a785c81d16c6fa"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = app.firestore()

export {db,auth };
