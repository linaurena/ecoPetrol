import './cardPost.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

function CardPost(props) {
    return (
      <div className="cardPost">
        <div className="userData">
            <div className="photoPost">
                <div className="circleImgPost">
                    <img src= {props.image} alt ="" className="userImgPost"/>
                </div>
            </div>
            <div className="userNamePost">
                <div className="userFullnamePost">
                    <p className="nameStylePost">{props.fullname}</p>
                </div>
                <div className="userPostDate">
                    <p className="dateStylePost">{props.date}</p>
                </div>
            </div>
        </div>
        <div className="userBody">
            {
                props.bodyText &&
                <p className="bodyPost">{props.bodyText}</p>
            }
            {
                props.picture &&
                <div className="bodyPic">
                    <img src={props.picture} className="picture"/>
                </div>
            }
        </div>
        <div className="userComment">
            <div className="likesView">
                <FontAwesomeIcon icon={props.like ? fasFaHeart : farFaHeart} className="iconHeart" style={{color:props.like ? "red" : "black"}} onClick={props.likeAction}/>
                <p className="likeText">{props.numberLikes} likes</p>
            </div>
            <div className="commentView">
                <FontAwesomeIcon icon={faComment} className="iconHeart"  onClick={props.commentAction}/>
                <p className="likeText">{props.numberComments} comentarios</p>
            </div>
        </div>
      </div>
    );
  }

export default CardPost;