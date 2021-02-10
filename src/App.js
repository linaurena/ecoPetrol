import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './componentes/footerComponente/footer.js'
import './App.scss';
import { Dashboard } from "./dashboardView/dashboard.js";
import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyB97MFDk0wRoFav5TnoI6OOYdsWYmt7ZIQ",
  authDomain: "ecopetrol-tf.firebaseapp.com",
  projectId: "ecopetrol-tf",
  storageBucket: "ecopetrol-tf.appspot.com",
  messagingSenderId: "488819244820",
  appId: "1:488819244820:web:9e396db99bd0be01348c01"
};
// Inicia Firebase
firebase.initializeApp(firebaseConfig);


export default function App() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <DashboardView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div></div>
  );
}

function DashboardView() {
  return (
    <Dashboard/>
  );
}
