import React from "react";
import './dashboard.scss';
import image from '../../img/Karla.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import CardPost from '../../componentes/cardPostComponent/cardPost'
import ModalPost from '../../componentes/modalPost/modalPost'
import firebase from 'firebase';
var moment = require('moment'); // Libreria para el manejo del tiempo

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false,
          isVisible: false,
          post: [],
          uid: "9oNLbuZCjTTZtt83OSaQ"
        };
    }

    componentDidMount(){
        this.getPost()
    }

    async getPost(){
        let aux = []
        let promises = [];
        let _this = this
        await firebase.firestore().collection("post").orderBy('createdAt', 'desc').get()
        .then(async (query)=>{
            await query.forEach(function(doc){
                promises.push(
                    firebase.firestore().collection("users").doc(doc.data().user).get()
                    .then((userData)=>{

                        // Validemos las fechas para el post
                        let dateInfo = null
                        let today = moment()
                        let yesterday = moment().subtract(1, 'days')
                        if (moment(doc.data().createdAt.seconds * 1000).isSame(today, 'd'))
                        {
                            dateInfo = 'Hoy a las '+moment(doc.data().createdAt.seconds * 1000).format('h:mma')
                        }
                        else if (moment(doc.data().createdAt.seconds * 1000).isSame(yesterday, 'd'))
                        {
                            dateInfo = 'Ayer a las '+moment(doc.data().createdAt.seconds * 1000).format('h:mma')
                        }
                        else
                        {
                            dateInfo = moment(doc.data().createdAt.seconds * 1000).format('MMMM Do YYYY, h:mm:ss a')
                        }

                        let liked = doc.data().likes.includes(_this.state.uid)

                        aux.push({
                            id: doc.id,
                            dateInfo: dateInfo,
                            message: doc.data().message,
                            picture: doc.data().picture,
                            userImage: userData.data().photo,
                            userFullname: userData.data().name + " " + userData.data().lastName,
                            liked: liked,
                            likesNumbers: doc.data().likes.length,
                            commentNumbers: doc.data().comments.length,
                        })
                        
                    })
                )
            })
        })

        Promise.all(promises).then(() => 
            this.setState({
                post: aux
            }, ()=>{
                console.log(this.state.post[0])
            })
            
        );
        
    }

    publishAction(){
        this.getPost()
        this.setState({isVisible: false})
    }

    likeAction(ID){
        console.log(ID)
        let aux2 = this.state.post
        let i = 0
        for (let index = 0; index < this.state.post.length; index++) {
            if (this.state.post[index].id == ID)
            {
                i = index
                break
            }
        }
        firebase.firestore().collection("post").doc(ID).get()
        .then((post)=>{
            console.log(post.data())
            let aux = post.data().likes
            if (aux.includes(this.state.uid))
            {
                for (let index = 0; index < aux.length; index++) {
                    if (aux[index] == this.state.uid)
                    {
                        aux.splice(index,1)
                    }
                    
                }

                aux2[i].liked = false
                aux2[i].likesNumbers--
            }
            else{
                aux.push(this.state.uid)
                aux2[i].liked = true
                aux2[i].likesNumbers++
            }
            console.log(aux)

            firebase.firestore().collection("post").doc(ID).update({
                likes: aux
            })

            console.log(aux2)

            this.setState({post: aux2})
        })
        
    }

    cancelAction(){
        this.setState({
            isVisible: false
        })
    }

    render() {
      return (
        <div className="mainDiv">
            <ModalPost
                isVisible={this.state.isVisible}
                cancelAction={()=>this.cancelAction()}
                publishAction={()=>this.publishAction()}
                UID={this.state.uid}
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
                {
                    this.state.post.map(function(post, i){
                        return (
                            <CardPost 
                                key={post.id}
                                image={post.userImage} 
                                fullname={post.userFullname} 
                                date={post.dateInfo} 
                                bodyText={post.message}
                                like={post.liked}
                                likeAction={()=>this.likeAction(post.id)}
                                numberLikes={post.likesNumbers}
                                commentAction={()=>alert("Comment")}
                                numberComments={post.commentNumbers}
                                picture={post.picture}
                            />
                        )
                    }, this)
                }
                
            </div>
        </div>
      )
    }
}