import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../views/Onboarding/Home';
import UserProfile from '../views/UserProfile/UserProfile';
import Directory from "../views/Directory/Directory";
import NavBar from '../componentes/navBar/NavBar';
import Profile from '../views/profileView/profile';
import EditProfile from '../views/profileView/editProfile';
import { Dashboard } from "../views/dashboardView/dashboard.js";
import Chat from "../views/chat/Chat.js";
// import Error404 from '../views/Error404';

const Router = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home windowchoose='Register' hash='/'/>
          </Route>
          <Route path='/perfil' component={ProfileView}/>
          <Route exact path='/dashboard' component={DashboardView}/>
          <Route exact path='/directorio' component={Directory}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/editPerfil' component={EditPerfilView}/>
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

function ProfileView() {
  return (
    <div>
      <Profile/>
      <NavBar/>
    </div>
  )
}

function EditPerfilView() {
  return (
    <div>
      <EditProfile/>
    </div>
  )
}

export default Router;
