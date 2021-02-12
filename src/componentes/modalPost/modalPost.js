import React, { useState } from 'react';
import './modalPost.scss';
import Modal from 'react-modal';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { storage } from '../../controller/firebase-config';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };

function ModalPost(props) {
    const [placeholder, setPlaceholder] = useState("Tu mensaje para la comunidad.....");
    const [disabledBody, setDisabledBody] = useState(false);
    const [placeholderImage, setPlaceholderImage] = useState("");
    const [disabledImage, setDisabledImage] = useState(false);
    const [Image, setImage] = useState("");
    var bodyText = null
    function handleChange(text){
        //console.log(text.target.value)
        setDisabledImage(true)
        bodyText = text.target.value
    }

    function cancelAction(){
        setPlaceholder("Tu mensaje para la comunidad.....")
        setDisabledBody(false)
        setPlaceholderImage("")
        setDisabledImage(false)
        setImage("")
        props.cancelAction()
    }

    function handleChangeImage(e){
        if (e.target.files[0])
        {
            setImage(e.target.files[0])
            setDisabledBody(true)
            setPlaceholder("Solo se puede subir una imágen o colocar un texto.")
            setPlaceholderImage(e.target.files[0].name)
        }
    }

    function sendToFirebase(){
        if (bodyText)
        {
            firebase.firestore().collection("post").doc().set({
                createdAt: new Date(),
                message: bodyText,
                picture: null,
                likes: [],
                comments: [],
                user: props.UID
            }).then((response)=>{
                props.publishAction()
            })
        }
        else if (Image)
        {
            const uploadTask = storage.ref(`imagePost/${props.UID}/${Image.name}`).put(Image);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    //setProgress(progress);
                },
            error => {
                console.log(error);
            },
                () => {
                    storage
                    .ref('imagePost/'+props.UID)
                    .child(Image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        firebase.firestore().collection("post").doc().set({
                            createdAt: new Date(),
                            message: null,
                            picture: url,
                            likes: [],
                            comments: [],
                            user: props.UID
                        }).then((response)=>{
                            props.publishAction()
                        })
                    });
                }
            );
        }
        else{
            alert("se debe colocar un mensaje")
        }
    }

    return (
        <Modal
            isOpen={props.isVisible}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <div className="modalPostDiv">
                <p className="titlePost">Nueva Publicación</p>
                <div className="boxPost">
                    <p className="createPost">Crear publicación</p>
                    <input type="textarea" 
                        name="inputBox"
                        onChange={(text)=> handleChange(text)}
                        className="inputBox"
                        placeholder={placeholder}
                        disabled={disabledBody}
                    />
                    <div className="imageBlock">
                        <label htmlFor="upload-button">
                            <FontAwesomeIcon icon={faImage} className="iconHeart"/>
                        </label>
                        <input type="file" disabled={disabledImage} id="upload-button" style={{ display: 'none' }} onChange={handleChangeImage} />
                        <p className="placeholderImage">{placeholderImage}</p>
                    </div>
                </div>
                <div className="buttonsPost">
                    <div className="cancelButtonDiv">
                        <button className="buttonCancel" onClick={cancelAction}>
                            Cancelar
                        </button>
                    </div>
                    <div className="submitButtonDiv" onClick={sendToFirebase}>
                        <button className="buttonPublish">
                            Publicar
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
  }

export default ModalPost;