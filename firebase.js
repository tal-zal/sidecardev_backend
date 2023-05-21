// This file exports firebase and firebaseDatabase objects
const firebase = require('firebase/app');
// require('firebase/firestore'); // Import additional Firebase services if needed
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyBvfOpgYeasmMuFl_cNFf8NZUhZ6yBsD3Q",
    authDomain: "sidecar-402a5.firebaseapp.com",
    databaseURL: "https://sidecar-402a5-default-rtdb.firebaseio.com",
    projectId: "sidecar-402a5",
    storageBucket: "sidecar-402a5.appspot.com",
    messagingSenderId: "945779284465",
    appId: "1:945779284465:web:dec398402a320216cdcc50",
    measurementId: "G-NZS4NHGYMH"
  };

firebase.initializeApp(firebaseConfig);
const rt = firebase.database();

// const rtDatabase = firebase.database();

// Export the initialized Firebase app's database
module.exports = rt;