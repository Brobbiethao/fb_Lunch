import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyArNbz75gAPM4Trmh5lx3yCgX297XUFpMk",
  authDomain: "test-72186.firebaseapp.com",
  databaseURL: "https://test-72186.firebaseio.com",
  projectId: "test-72186",
  storageBucket: "test-72186.appspot.com",
  messagingSenderId: "685055038851"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
