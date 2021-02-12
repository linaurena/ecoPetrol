import React from "react";
import Router from './controller/Router';
import {AuthContextProvider} from './controller/AuthContext';
import './App.scss';

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
