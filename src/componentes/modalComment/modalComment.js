import React, { useState, useRef  } from 'react';
import './modalComment.scss';
import Modal from 'react-modal';
import firebase from 'firebase';
import CommentBox from './commentBox';

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

function ModalComment(props) {
    const [comment, setComment] = useState([]);
    let bodyText


    function handleChange(text){
        bodyText = text.target.value
    }

    function cancelAction() {
        props.cancelAction()
    }

    function sendToFirebase() {
        let aux = []
        firebase.firestore().collection("post").doc(props.postID).get()
        .then((post)=>{
            console.log(post.data())
            aux = post.data().comments
            aux.push({
                createdAt: new Date(),
                comment: bodyText,
                user: props.UID
            })

            firebase.firestore().collection("post").doc(props.postID).update({
                comments: aux
            })

            props.publishAction()
        })
    }

    return (
        <Modal
            isOpen={props.isVisible}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <div className="modalCommentDiv">
                <div className="commentsTitle">
                    <p className="titlePost">Comentarios</p>
                </div>
                <div className="commentsList">
                    {
                        props.comments.map(function(comment, i){
                            return (
                                <CommentBox
                                    image={comment.image}
                                    textBox={comment.text}
                                />
                            )
                        })
                    }
                </div>
                <div className="commentsBox">
                    <input type="textarea" 
                        name="inputBox"
                        onChange={(text)=> handleChange(text)}
                        className="inputBoxComment"
                        placeholder="Tu  comentario para la comunidad....."
                        disabled={false}
                    />
                    <div className="buttonComment">
                        <div className="cancelButtonDivComment">
                            <button className="buttonCancelComment" onClick={cancelAction}>
                                Cancelar
                            </button>
                        </div>
                        <div className="submitButtonDivComment" onClick={sendToFirebase}>
                            <button className="buttonPublishComment">
                                Publicar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
  }

export default ModalComment;