import React from 'react';
import './modalComment.scss';

function CommentBox(props) {
    return (
        <div className="boxComment">
            <div className="photoComment">
                <div className="circleImg">
                    <img src= {props.image} alt ="" className="userImg"/>
                </div>
            </div>
            <div className="commentBoxPost">
                <p className="commentText">{props.textBox}</p>
            </div>
        </div>
    );
  }

export default CommentBox;