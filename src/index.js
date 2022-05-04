import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhaAczp9GWzm_qgROpXfmDjudSDWC7MPs",
  authDomain: "reactjs-coderhouse-46420.firebaseapp.com",
  projectId: "reactjs-coderhouse-46420",
  storageBucket: "reactjs-coderhouse-46420.appspot.com",
  messagingSenderId: "396986343531",
  appId: "1:396986343531:web:a95f20188f324948b2d12e"
};


initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
