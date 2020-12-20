import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDXvqxTBHg-iCzWc9izldiC0IrMPhO2EcY",
    authDomain: "simple-notes-firebase-ed6a6.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-ed6a6.firebaseio.com",
    projectId: "simple-notes-firebase-ed6a6",
    storageBucket: "simple-notes-firebase-ed6a6.appspot.com",
    messagingSenderId: "1002174184297",
    appId: "1:1002174184297:web:2ee58a749b8ebed6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;