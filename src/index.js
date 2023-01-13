import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDUec_rlZLH-F8Mukux2CKnETURp7L2FKM",
  authDomain: "webi2b.firebaseapp.com",
  projectId: "webi2b",
  storageBucket: "webi2b.appspot.com",
  messagingSenderId: "398069084072",
  appId: "1:398069084072:web:6e507c50381171754af79d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
