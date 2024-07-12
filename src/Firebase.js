import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnUJ6bgJfPgauFw7eZXyLD9ST3YAwpyXk",
  authDomain: "challenge-57200.firebaseapp.com",
  projectId: "challenge-57200",
  storageBucket: "challenge-57200.appspot.com",
  messagingSenderId: "1050844523983",
  appId: "1:1050844523983:web:519390bff8466a70f476ba",
  measurementId: "G-EPJLYQ2PJ6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
const db = firebaseApp.firestore();

// Get the authentication instance
const auth = firebase.auth();

// Export Firebase instances
export { db, auth };








