import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../views/Onboarding/Home';
import UserProfile from '../views/UserProfile/UserProfile';
// import Error404 from '../views/Error404';

const Router = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home windowchoose='Register' hash='/'/>
          </Route>
          <Route path='/perfil' component={UserProfile}/>
          {/*<Route exact path='/dashboard' component={DashboardView}/>*/}
          {/*<Route exact path='/directorio' component={Directory}/>*/}
        </Switch>
      </BrowserRouter>
    )
}
export default Router;
