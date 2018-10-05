import React, { Component } from 'react';

class CommentList extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  showComments = () => {
    if(!this.state.docComments) {
      this.getDoc();
    }else {
      return <CommentList theDoc={this.state} />
    }
  }

  render(){
    return(
      <div>
        <div>
          { this.props.theDoc.docComments.map((comment, index) => {
            return (
              <div key={comment._id}>
                <p>Author: {comment.author}</p>
                <p>uploadDate: {comment.uploadDate}</p>
                <p>visitDate: {comment.visitDate} </p>
                <p>rating: {comment.rating}</p>
                <p>visitReason: {comment.visitReason} </p>
                <p>comment: {comment.comment}</p>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default CommentList;