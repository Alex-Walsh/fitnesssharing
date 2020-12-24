import React, { useEffect, useContext, useState } from 'react';
import '../styles/Login.css'
import { signInWithGoogle } from '../firebase/firebase';
import { UsrCntxt } from '../contextThings';
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebase.js';

export default function Login() {
  const {value, setvalue} = useContext(UsrCntxt);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (value) {
      setredirect("/")
    }
  }, [value])
  if (redirect) {
    <Redirect to="/"/>
  }

    const signIn = () => {
      //take 2 params 
      auth.signInWithEmailAndPassword("alexwalsh350@gmail.com", "rcabd677")
      .then((res) => {
        setvalue(res.user.uid);
      })
      .catch((err) => {
        console.error(err);
      }) 
    }

  return (
      <div className="login-buttons">
        {/* <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span>Continue with Google</span> */}
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <button onClick={signIn}>Hello</button>
        {/* <h1>{value}</h1> */}
       {/* </button> */}
      </div>
  );
}
