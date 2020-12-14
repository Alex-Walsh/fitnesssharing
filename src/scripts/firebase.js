import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUH2KjUc2567ThVmC_JOjBgp-v68ahHMI",
    authDomain: "fitness-app-db0b5.firebaseapp.com",
    projectId: "fitness-app-db0b5",
    storageBucket: "fitness-app-db0b5.appspot.com",
    messagingSenderId: "409833075822",
    appId: "1:409833075822:web:3b6adb0d37b8430567627f",
    measurementId: "G-5V565Q1B77"
  };


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();