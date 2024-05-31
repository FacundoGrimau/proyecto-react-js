// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPxtTbMytqWV9PhhGATyx3WVVZWAYWUis",
  authDomain: "tienda-lulu.firebaseapp.com",
  projectId: "tienda-lulu",
  storageBucket: "tienda-lulu.appspot.com",
  messagingSenderId: "169194151915",
  appId: "1:169194151915:web:41c887edb53074f31c43ae"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
