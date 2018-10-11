import React, { Component } from 'react';
import './Comment.css';

class CommentList extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  showComments = () => {
    if(this.props.theDoc.docComments) {
      return (
        this.props.theDoc.docComments.map((comment, index) => {
          return (
            <div key={comment._id}  className="comment-info">

            <div className="form-container">
            <img src={comment.author.userImage} alt=""/>
            <div className="comment-details">
            <div className="comment">
              <p className="label-full">Author:</p> <p>{comment.author.firstName}</p>
            </div>
            <div className="comment">
              <p className="label-full">Upload Date:</p> <p> {comment.uploadDate}</p>
            </div>
            </div>
            <div className="comment-details">
            <div className="comment">  
              <p className="label-full">Visit Date:</p> <p> {comment.visitDate} </p>
            </div>
            <div className="comment"> 
              <p className="label-full">Rating: </p> <p>{comment.rating}</p>
            </div>
            </div>
            <div className="comment">
              <p className="label-full">Reason for Visit:</p> <p> {comment.visitReason} </p>
            </div>
            <div className="comment">
              <p className="label-full">Comments:</p> <p> {comment.comment}</p>
            </div>
            
            </div>
            </div>
          )})
        )
      }
  }

  render(){
    console.log(this.props.theDoc.docComments);
    return(
      <div>
      {this.showComments()}
      </div>
    )
  }
}


export default CommentList;