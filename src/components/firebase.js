import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWQ6_2Kp97XRoshYN24J2CiJ6JIqeRTQI",
  authDomain: "crasfthome.firebaseapp.com",
  projectId: "crasfthome",
  storageBucket: "crasfthome.appspot.com",
  messagingSenderId: "74132282453",
  appId: "1:74132282453:web:18d625408bc9babb6208dc",
  measurementId: "G-D30X1VVM12"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth}