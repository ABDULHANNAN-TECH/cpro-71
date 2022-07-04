import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAo4rgreFL--c4GMpc6ebIWGGct8W9A848",
    authDomain: "e-rider-3506b.firebaseapp.com",
    projectId: "e-rider-3506b",
    storageBucket: "e-rider-3506b.appspot.com",
    messagingSenderId: "85112714965",
    appId: "1:85112714965:web:5c0ab13eb1f3ee1e42545c",
    measurementId: "G-S383N0R51F"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
