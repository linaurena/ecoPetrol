import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import AuthGoogle from './AuthGoogle';
import Style from './LogInForm.module.css';
import AuthFacebook from './AuthFacebook';

const choose = {
  Register: function register (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  Login: function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

const LogInForm=({windowchoose, hash})=> {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function sendData (e) {
    e.preventDefault();
    // choose[windowchoose](email, password)
    // .then( () =>{
    //   history.push('/dashboard')
    //   })
    // .catch((e) => {
    //   setError(e.message);
    //   setTimeout(() => {
    //     setError('')
    //   }, 4000)
    // })

    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      localStorage.setItem('uid', user.user.uid);
      history.push('/dashboard');
      //console.log(user.user.uid)
      
      console.log('logueado');
    });
  }

  return (
    <div className={`${Style.logInContainer}`}>
      <h2 className={`${Style.title}`}>Ingreso</h2>
      <div className={`${Style.btnLoginContainer}`}>
        <AuthGoogle/>
        <AuthFacebook />
      </div>
      <p className={`${Style.o}`}>- O -</p>
      <p className={`${Style.message}`}>
        {windowchoose === 'LogIn'?
        'LogIn to continue' : ''}
      </p>
      <form onSubmit={sendData}>
        {error && <div className={`${Style.error}`}>{error}</div>}
        <div className={`mb-3 ${Style.inputContainer}`}>
          <label className={`${Style.label}`}>Correo electrónico</label>
          <input type='email' placeholder='ejemplo@mail.com' value={email} onChange={(e) => {
            setEmail(e.target.value)}} className={`form-control ${Style.input}`} />
          <label htmlFor="" className={`${Style.label}`}>Contraseña</label>
          <input type='password' placeholder='********' value={password} onChange={(e) => {
            setPassword(e.target.value)}} className={`form-control ${Style.input}`} />
        </div>
        <button className={`${Style.btn}`} >
          {windowchoose === 'LogIn'? 'LogIn' : 'Ingresar' }
        </button>
      </form>
      <p className={`${Style.change}`}>
        {windowchoose === 'LogIn'? //Aquí debo crear el Sign Up
        '¿Dont you have an account yet?' : ' '}
        <Link to={hash} className={`row justify-content-center ${Style.link}`}>
          {windowchoose === 'LogIn'?
          'Register' : ' '}
        </Link>
      </p>
    </div>
  );
}

export default LogInForm;
