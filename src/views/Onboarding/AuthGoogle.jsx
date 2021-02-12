import React from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Style from './LogInForm.module.css';
import gmailIcon from './icons/gmail-icon.png';

function authSocialMedia (){
  const googleProvider =new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
}

const Auth = () =>{
  let history= useHistory();
  function google (e) {
    e.preventDefault();
    authSocialMedia().then( () =>{
      history.push('/dashboard') /////// dashboard
    })
  }

  return(
    <div className={`${Style.googleContainer}`}>
      <button className={`${Style.googleBtn}`} onClick={google}>Gmail<img src={gmailIcon} className={`${Style.google}`} alt="googleLogIn"/></button>
    </div>
  )
}

export default Auth;