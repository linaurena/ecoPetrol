import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../views/Onboarding/Home';
import UserProfile from '../views/UserProfile/UserProfile';
import Directory from "../views/Directory/Directory";
import NavBar from '../componentes/navBar/NavBar';
import Profile from '../views/profileView/profile';
import { Dashboard } from "../views/dashboardView/dashboard.js";
// import Error404 from '../views/Error404';

const Router = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home windowchoose='Register' hash='/'/>
          </Route>
          <Route path='/perfil' component={UserProfile}/>
          <Route exact path='/dashboard' component={DashboardView}/>
          <Route exact path='/directorio' component={Directory}/>
        </Switch>
      </BrowserRouter>
    )
}

function DashboardView() {
  return (
    <div>
      <Dashboard/>
      <NavBar/>
    </div>
  )
}

export default Router;
