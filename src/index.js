import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import App from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app'; // Импортируйте Firebase здесь
import 'firebase/compat/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyABJuFzDhGSk6wGi6ZWBZDiviejOq2t9-c",
  authDomain: "auth-d81f4.firebaseapp.com",
  projectId: "auth-d81f4",
  storageBucket: "auth-d81f4.appspot.com",
  messagingSenderId: "690663732660",
  appId: "1:690663732660:web:986721a65b2b68f38d6ee1",
  measurementId: "G-6VK3F91B9K"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

