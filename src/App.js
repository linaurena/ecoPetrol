import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './componentes/footerComponente/footer.js'
import './App.scss';
import { Dashboard } from "./dashboardView/dashboard.js";



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
