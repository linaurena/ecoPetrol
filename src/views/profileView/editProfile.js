import React from "react";
import './profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
var moment = require('moment'); // Libreria para el manejo del tiempo

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          uid: "",
          redirect: false,
          image: null,
          status: "",
          name: "",
          lastname: "",
          ocupation: "",
          value: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.lastnameChange = this.lastnameChange.bind(this)
        this.ocupationChange = this.ocupationChange.bind(this)
        this.cancelAction = this.cancelAction.bind(this)
        this.sendToFirebase = this.sendToFirebase.bind(this)
    }

    componentDidMount(){
        let uid = localStorage.getItem('uid');
        console.log(uid)
        this.setState({uid: uid})
        firebase.firestore().collection("users").doc(uid).get()
        .then((userData)=>{
            this.setState({
                image: userData.data().photo,
                status: userData.data().statusUser,
                name: userData.data().name,
                lastname: userData.data().lastName,
                ocupation: userData.data().occupation
            })
        })
    }

    backAction(){
        this.setState({redirect: '/perfil'})
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({status: event.target.value});
    }

    nameChange(event){
        this.setState({name: event.target.value});
    }

    lastnameChange(event){
        this.setState({lastname: event.target.value});
    }

    ocupationChange(event){
        this.setState({ocupation: event.target.value});
    }

    cancelAction(){
        this.setState({redirect: '/perfil'})
    }

    sendToFirebase(){
        let _this = this
        firebase.firestore().collection("users").doc(this.state.uid).update({
            statusUser: _this.state.status,
            name: _this.state.name,
            lastName: _this.state.lastname,
            occupation: _this.state.ocupation
        })
        this.setState({redirect: '/perfil'})
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
                <p className="titleProfile">Editar perfil</p>
            </div>
            <div className="rowTitle1">
                <p className="titleEdit">Nombre</p>
            </div>
            <div className="rowTitle">
                <input type="text" name="name" value={this.state.name} placeholder="Nombre" className="inputTextBox" onChange={this.nameChange}/>
            </div>
            <div className="rowTitle">
                <p className="titleEdit">Apellido</p>
            </div>
            <div className="rowTitle">
                <input type="text" name="name" value={this.state.lastname} placeholder="Apellido" className="inputTextBox"  onChange={this.lastnameChange}/>
            </div>
            <div className="rowTitle">
                <p className="titleEdit">Estado</p>
            </div>
            <div className="rowTitle">
                <select value={this.state.status} onChange={this.handleChange}  className="inputTextBox">
                    <option value="EGRESADO">Egresado</option>
                    <option value="ECOPETROL">Ecopetrol</option>
                    <option value="ACTIVO">Activo</option>
                </select>
            </div>
            <div className="rowTitle">
                <p className="titleEdit">Ocupación</p>
            </div>
            <div className="rowTitle">
                <input type="text" name="name" value={this.state.ocupation} placeholder="Ocupación" className="inputTextBox"  onChange={this.ocupationChange}/>
            </div>
            <div className="buttonCommentProfile">
                <div className="cancelButtonDivCommentProfile">
                    <button className="buttonCancelCommentProfile" onClick={this.sendToFirebase}>
                        Guardar
                    </button>
                </div>
                <div className="submitButtonDivCommentProfile" onClick={this.cancelAction}>
                    <button className="buttonPublishCommentProfile">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
      )
    }
}
