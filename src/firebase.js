// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJCwYXc4SpM45esDPkUndcirUQPwpDz0k",
    authDomain: "my-car-1f754.firebaseapp.com",
    projectId: "my-car-1f754",
    storageBucket: "my-car-1f754.appspot.com",
    messagingSenderId: "585445719797",
    appId: "1:585445719797:web:7763911a8c1ee8c2ed4fbc",
    measurementId: "G-C0EN8VRS8W"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  //const analytics = getAnalytics(app);
  export { firebase, auth, db } ;
  
  
