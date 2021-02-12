import React from "react";
import './profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
var moment = require('moment'); // Libreria para el manejo del tiempo

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          uid: "9oNLbuZCjTTZtt83OSaQ",
          redirect: false,
          image: null,
          status: "",
          fullname: "",
          ocupation: ""
        };
    }

    componentDidMount(){
        firebase.firestore().collection("users").doc(this.state.uid).get()
        .then((userData)=>{
            this.setState({
                image: userData.data().photo,
                status: userData.data().statusUser,
                fullname: userData.data().name + " "+ userData.data().lastName,
                ocupation: userData.data().occupation
            })
        })
    }

    backAction(){
        this.setState({redirect: '/dashboard'})
    }

    goEditPerfil(){
        this.setState({redirect: '/editPerfil'})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
      return (
        <div className="mainDiv">
            <div className="backBox">
                <FontAwesomeIcon icon={faArrowLeft} className="back" onClick={()=>this.backAction()}/>
            </div>
            <div className="titleProfile">
                <p className="titleProfile">Perfil</p>
            </div>
            <div className="profilePicDiv">
                <div className="photoProfile">
                    <div className="circleImgProfile">
                        <img src= {this.state.image} alt ="" className="userImgProfile"/>
                    </div>
                </div>
                <div className="typePerfil">
                    <p className="textType">{this.state.status}</p>
                </div>
            </div>
            <div className="profileNameDiv">
                <p className="profileName">{this.state.fullname}</p>
            </div>
            <div className="profileSpecialityDiv">
                <p className="profileSpeciality">{this.state.ocupation}</p>
            </div>
            <div className="boxButtonProfile">
                <button className="postButton" onClick={()=>this.goEditPerfil()}>
                    Editar Perfil
                    <FontAwesomeIcon icon={faPen} className="iconPen"/>
                </button>
            </div>
            <div className="closeSession">
                <p className="logoutText" onClick={()=>{this.setState({redirect: '/'})}}>Cerrar sesión</p>
            </div>
        </div>
      )
    }
}
