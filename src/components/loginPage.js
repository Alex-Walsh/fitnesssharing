import React, {useContext, useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import { signInWithGoogle } from '../firebase/firebase';
import { UsrCntxt } from '../contextThings';
import { Redirect, useLocation } from 'react-router-dom';
import { auth } from '../firebase/firebase.js';
import firebase from "firebase/app";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {value, setvalue} = useContext(UsrCntxt);
  const [redirect, setredirect] = useState(null);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const signIn = () => {
    //take 2 params 
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
      setvalue(res.user.uid);
      localStorage.setItem('authUser', res.user.uid);
      console.log(localStorage.getItem('authUser'));
    }) ); 

  }

  function getToken(uid) {
    //TODO: ERROR HANDLE
    axios.get("http://localhost:5000/fitness-app-db0b5/us-central1/api/getToken", {
      params: {
        uid: "8bdIe4HOfoSCEG6j7osKFgcttI02"
    }}).then((res) => {
      localStorage.setItem('authToken', res.data.token);
      return res.data.token;
    });
  }
//USER PERSISTENCE
  useEffect(() => {
    let possibleUser = localStorage.getItem('authUser');
//TODO: DOES NOT WORK, IS FINNICKY
    if(typeof possibleUser != undefined && typeof possibleUser != null) {
      //TODO: ERROR HANDLE
      getToken(localStorage.getItem('authUser'));
      auth.signInWithCustomToken(localStorage.getItem('authToken'))
      .then((res) => {
        console.log(res);
        setvalue(res.user.uid);
      })
    }
  }, []);

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" onClick={signIn}  disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

