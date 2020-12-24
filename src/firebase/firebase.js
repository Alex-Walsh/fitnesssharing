import firebase from "firebase/app";
import { useContext } from 'react';
import "firebase/auth";
import "firebase/firestore";
import dotenv from 'dotenv'
import { UsrCntxt } from '../contextThings';
dotenv.config()

firebase.initializeApp({
  apiKey: "AIzaSyDUH2KjUc2567ThVmC_JOjBgp-v68ahHMI",
    authDomain: "fitness-app-db0b5.firebaseapp.com",
    projectId: "fitness-app-db0b5",
    storageBucket: "fitness-app-db0b5.appspot.com",
    messagingSenderId: "409833075822",
    appId: "1:409833075822:web:3b6adb0d37b8430567627f",
    measurementId: "G-5V565Q1B77"

});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    // user object
    console.log(res.user)
    return res.user;
    
    //context user = res.user

  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}

