import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Comment.css';
import '../doctors/Doctor.css';

class CommentList extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  // deleteComment = () => {
  //   axios.delete(process.env.REACT_APP_BASE_URL+`/doctors/delete/${this.props.theDoc._id}`)
  //   .then( response =>{
  //       this.props.history.push(`/doctors/${this.props.theDoc._id}`); 
  //   })
  //   .catch((err)=>{
  //       console.log(err)
  //   })
  // }

  showComments = () => {
    if(this.props.theDoc.docComments) {
      return (
        this.props.theDoc.docComments.map((comment, index) => {
          return (
            <div className="page-doc-info">
              <div key={comment._id}>
                <div className="container-doc-info">
                  <div className="form-doc-container">
                    <div className="doc-info-2">
                      <div className="img-doc-container-3">
                        <img src={comment.author.userImage} className="doc-img-2" alt="" />
                      </div>
                      <div className="doc-right-col">
                        <div className="doc-row">
                          <div className="doc-right-col">
                            <div className="label-doc-full">Author:</div>
                            <div className="input-doc-sm">{comment.author.firstName}</div>
                          </div>
                          <div className="doc-right-col">
                            <div className="label-doc-full">Upload Date:</div>
                            <div className="input-doc-sm">{comment.uploadDate}</div>
                          </div>
                        </div>
                        <div className="doc-row">
                          <div className="doc-right-col">
                            <div className="label-doc-full">Visit Date:</div>
                            <div className="input-doc-sm">{comment.visitDate} </div>
                          </div>
                          <div className="doc-right-col">
                            <div className="label-doc-full">Rating: </div>
                            <div className="input-doc-sm">{comment.rating}</div>
                          </div>
                        </div>
                        <div className="doc-right-col">
                          <div className="label-doc-full">Reason for Visit:</div>
                          <div className="input-doc-md">{comment.visitReason} </div>
                        </div>
                      </div>
                    </div>
                    <div className="doc-right-col">
                      <div className="label-doc-full">Comment:</div>
                      <div className="input-doc-2">{comment.comment}</div>
                    </div>
                    {/* <div className="doc-row">
<div className="btn-doc-2" onClick={() => this.deleteComment()}>Delete Comment</div>
</div> */}
                  </div>
                </div>
              </div>
            </div>
          )})
        )
      }
  }

  render(){

    return(
      <div>
        {this.showComments()}
      </div>
    )
  }
}


export default CommentList;