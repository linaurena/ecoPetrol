import React from "react";
import './dashboard.scss';
import image from '../img/Karla.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import CardPost from '../componentes/cardPostComponent/cardPost'
import ModalPost from '../componentes/modalPost/modalPost'

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false,
          isVisible: false
        };
    }

    render() {
      return (
        <div className="mainDiv">
            <ModalPost
                isVisible={this.state.isVisible}
                cancelAction={()=>this.setState({isVisible: false})}
            />
            <div className="userInfo">
                <div className="photo">
                    <div className="circleImg">
                        <img src= {image} alt ="" className="userImg"/>
                    </div>
                </div>
                <div className="userName">
                    <div className="userFirstname">
                        <p className="nameClass">Karla</p>
                    </div>
                    <div className="userLastname">
                        <p className="nameClass">Guaita</p>
                    </div>
                </div>
            </div>
            <div className="createPostButton">
                <button className="postButton" onClick={()=>this.setState({isVisible: true})}>
                    Crea un post
                    <FontAwesomeIcon icon={faPen} className="iconPen"/>
                </button>
            </div>
            <div className="postView">
                <CardPost 
                    image={image} 
                    fullname="Karla Guaita" 
                    date="Hoy a las 8:00pm" 
                    bodyText="Ser beneficiaria de esta beca ha sido una oportunidad tanto para mi como para mi familia, muchas gracias EcoPetrol"
                    like={true}
                    likeAction={()=>alert("Like")}
                    numberLikes={6}
                    commentAction={()=>alert("Comment")}
                    numberComments={12}
                />
                <CardPost 
                    image={image} 
                    fullname="Karla Guaita" 
                    date="Hoy a las 8:00pm" 
                    bodyText="Ser beneficiaria de esta beca ha sido una oportunidad tanto para mi como para mi familia, muchas gracias EcoPetrol"
                    like={false}
                    likeAction={()=>alert("Like")}
                    numberLikes={12}
                    commentAction={()=>alert("Comment")}
                    numberComments={4}
                />
            </div>
        </div>
      )
    }
}