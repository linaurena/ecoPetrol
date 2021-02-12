import React from "react";
import Router from './controller/Router';
import {AuthContextProvider} from './controller/AuthContext';
import './App.scss';
//import Onboarding from "./views/Onboarding/LogInForm";
//import { Dashboard } from "./views/dashboardView/dashboard.js";
// Importando componentes
import Directory from "./views/Directory/Directory";
import NavBar from './componentes/navBar/NavBar';
import Profile from './views/profileView/profile'
// import firebase from 'firebase/app'

// var firebaseConfig = {
//   apiKey: "AIzaSyB97MFDk0wRoFav5TnoI6OOYdsWYmt7ZIQ",
//   authDomain: "ecopetrol-tf.firebaseapp.com",
//   projectId: "ecopetrol-tf",
//   storageBucket: "ecopetrol-tf.appspot.com",
//   messagingSenderId: "488819244820",
//   appId: "1:488819244820:web:9e396db99bd0be01348c01"
// };
// Inicia Firebase
// firebase.initializeApp(firebaseConfig);




function App() {

  return (
    <AuthContextProvider>
      <div>
        <Router/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
