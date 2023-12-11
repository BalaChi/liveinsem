const firebase_app = require("firebase/app")
const firebase_auth = require("firebase/auth")
var request = require('request');

const firebaseConfig = {
  apiKey: "AIzaSyBwSuIcAhW3tl_SYt7i1mbMm85pmVLDb4s",
  authDomain: "ad-s-zone-login.firebaseapp.com",
  databaseURL: "https://ad-s-zone-login-default-rtdb.firebaseio.com",
  projectId: "ad-s-zone-login",
  storageBucket: "ad-s-zone-login.appspot.com",
  messagingSenderId: "643783946675",
  appId: "1:643783946675:web:b5f5f9faa400717d801bc6"
};

// Initialize Firebase
const app = firebase_app.initializeApp(firebaseConfig);
const auth = firebase_auth.getAuth(app);

async function createUser(email, password) {
  try {
    const userCredential = await firebase_auth.createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      isAnonymous: user.isAnonymous,
      providerData: user.providerData,
    };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function loginUser(email, password) {
  try{
    const userCredential = await firebase_auth.signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      isAnonymous: user.isAnonymous,
      providerData: user.providerData,
    };
  } catch(error) {
    console.error('Error signing in user:', error);
    alert(error)
    throw error
  }
}


module.exports = { createUser, loginUser };