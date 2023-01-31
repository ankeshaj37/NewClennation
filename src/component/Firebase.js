import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKkzDKPdr3ErRX2ZhOOX6m6fYFw-TQohw",
    authDomain: "newcleannation.firebaseapp.com",
    projectId: "newcleannation",
    storageBucket: "newcleannation.appspot.com",
    messagingSenderId: "336588938212",
    appId: "1:336588938212:web:fe5a8f99e7a982566685f1"
  };
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore()

export {db,auth };
