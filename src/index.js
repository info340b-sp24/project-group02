import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYTxqCyUYy7zlAQTs1FaGz08V8KAWuyZY",
  authDomain: "uw-ride-with-friends.firebaseapp.com",
  databaseURL: "https://uw-ride-with-friends-default-rtdb.firebaseio.com",
  projectId: "uw-ride-with-friends",
  storageBucket: "uw-ride-with-friends.appspot.com",
  messagingSenderId: "639759546665",
  appId: "1:639759546665:web:dfc0fbef68a2ee7ab45f38"
};

console.log("Firebase Configuration:", firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
