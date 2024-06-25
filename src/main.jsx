import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app"
import "./fontawesome.js"

const firebaseConfig = {
  apiKey: "AIzaSyBqYFohRw0GYUce1it9Stv8azrkj3s8F78",
  authDomain: "entrega--react--js.firebaseapp.com",
  projectId: "entrega--react--js",
  storageBucket: "entrega--react--js.appspot.com",
  messagingSenderId: "543699845372",
  appId: "1:543699845372:web:67aa6a268ddd3b7b919779"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
