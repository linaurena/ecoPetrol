import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';

// Importando componentes
import Directory from "./views/Directory/Directory";

export default function App() {
  return (
    <Router>
      {/* <div> */}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/directorio">
          <Directory />
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
