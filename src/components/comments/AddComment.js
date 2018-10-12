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
    axios.post(process.env.REACT_APP_BASE_URL+`/doctors/${this.props.theDoc._id}`, { visitDate, rating, visitReason, comment }, {withCredentials: true})
    .then( (response) => {
        this.setState({ visitDate:"", rating:"", visitReason:"", comment:"" });
        this.props.history.push(`/doctors/${this.props.theDoc._id}`)

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
            <div className="comment-row">
              <div>
                <h2 className="search-h3">Leave a review:</h2>
              </div>
              <label className="label-full-com">Visit Date:</label>
              <input type="date" name="visitDate" className="comment-input" value={this.state.visitDate} onChange={e => this.handleChange(e)} />
            </div>
            <div className="comment-row">
              <label className="label-full-com">Rating:</label>
              <input type="number" name="rating" className="comment-input" placeholder="rate this doctor 0-5" value={this.state.rating} onChange={e => this.handleChange(e)} />
            </div>
            <div className="comment-row">
              <label className="label-full-com">Reason for Visit:</label>
              <input type="text" name="visitReason" className="comment-input" placeholder="why did you see this doctor?" value={this.state.visitReason} onChange={e => this.handleChange(e)} />
            </div>
            <div className="comment-row">
              <label className="label-full-com">Comment:</label>
              <input type="text" name="comment" className="comment-input" placeholder="how did your appointment go?" value={this.state.comment} onChange={e => this.handleChange(e)} />
            </div>
            <div className="comment-row">
              <input type="submit" value="Submit Review" className="btn-com" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddComment;