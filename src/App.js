import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './componentes/footerComponente/footer.js'
import './App.scss';
import { Dashboard } from "./views/dashboardView/dashboard.js";
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

export default function App() {
  return (
    <Router>
      {/* <div> */}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/profile">
            <PerfilView />
        </Route>
        <Route path="/directorio">
          <Directory />
        </Route>
        <Route path="/dashboard">
            <DashboardView />
        </Route>
        <Route path="/">
          {/* <Home /> */}
          <h1>en home</h1>
        </Route>

      </Switch>
      {/* </div> */}
    </Router>
  );
}


// function Home() {
//   return (
//     < />
//   );
// }

function PerfilView() {
  return (
    <div>
      <Profile/>
      <NavBar/>
    </div>
  );
}

function DashboardView() {
  return (
    <div>
      <Dashboard/>
      <NavBar/>
    </div>
  );
}
