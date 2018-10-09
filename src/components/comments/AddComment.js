
import React, { Component } from 'react';
import axios from 'axios';
import './Comment.css';


class AddComment extends Component {
  constructor(props){
      super(props);
      this.state = { visitDate:"", rating:"", visitReason:"", comment:"" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const visitDate = this.state.visitDate;
    const rating = this.state.rating;
    const visitReason = this.state.visitReason;
    const comment = this.state.comment;
    axios.post(process.env.BASE_URL+`/doctors/${this.props.theDoc._id}`, { visitDate, rating, visitReason, comment }, {withCredentials: true})
    .then( (response) => {
        console.log("-------------", response )
        this.props.getData();
        this.setState({ visitDate:"", rating:"", visitReason:"", comment:"" });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <div className="comment-container">
        <form onSubmit={this.handleFormSubmit} className="form-container">
        <h2>LEAVE A COMMENT:</h2>
        <div className="comment-row">
          <label className="label-full">Visit Date:</label>
          <input type="date" name="visitDate" className= "comment-input" value={this.state.visitDate} onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="comment-row">
          <label className="label-full">Rating:</label>
          <input type="number" name="rating" className= "comment-input" value={this.state.rating} onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="comment-row">
          <label className="label-full">Reason for Visit:</label>
          <input type="text" name="visitReason" className= "comment-input" value={this.state.visitReason} onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="comment-row">
          <label className="label-full">Comment:</label>
          <input type="text" name="comment" className= "comment-input" value={this.state.comment} onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="comment-row">
          <input type="submit" value="Submit Comment" className= "comment-input"/>
        </div>
        </form>
        </div>

      </div>
    )
  }
}

export default AddComment;