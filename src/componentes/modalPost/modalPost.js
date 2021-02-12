import './modalPost.scss';
import Modal from 'react-modal';

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
    var bodyText
    function handleChange(text){
        //console.log(text.target.value)
        bodyText = text.target.value
    }

    function sendToFirebase(){
        //firebase.firestore().collection("pedidos").set(data)
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
                        placeholder="Tu mensaje para la comunidad....."
                    />
                    
                </div>
                <div className="buttonsPost">
                    <div className="cancelButtonDiv">
                        <button className="buttonCancel" onClick={props.cancelAction}>
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