import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3q1RZ-miTAuebwuqVL2mKqdXzHAqG2ec",
  authDomain: "anythingtodo-481b8.firebaseapp.com",
  projectId: "anythingtodo-481b8",
  storageBucket: "anythingtodo-481b8.appspot.com",
  messagingSenderId: "869726260535",
  appId: "1:869726260535:web:ccb0c7746baafbf8981eb2",
  measurementId: "G-28MDVWPVXH",
});

const db = firebaseApp.firestore();

export default db;
