import React from "react";
import './profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase';
import image from '../../img/Karla.png';
var moment = require('moment'); // Libreria para el manejo del tiempo

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          uid: "9oNLbuZCjTTZtt83OSaQ"
        };
    }

    render() {
      return (
        <div className="mainDiv">
            <div className="backBox">
                <FontAwesomeIcon icon={faArrowLeft} className="back" onClick={()=>alert('back')}/>
            </div>
            <div className="titleProfile">
                <p className="titleProfile">Perfil</p>
            </div>
            <div className="profilePicDiv">
                <div className="photoProfile">
                    <div className="circleImgProfile">
                        <img src= {image} alt ="" className="userImgProfile"/>
                    </div>
                </div>
                <div className="typePerfil">
                    <p className="textType">Egresada</p>
                </div>
            </div>
            <div className="profileNameDiv">
                <p className="profileName">Karla Guaita</p>
            </div>
            <div className="profileSpecialityDiv">
                <p className="profileSpeciality">Front-End</p>
            </div>
        </div>
      )
    }
}
