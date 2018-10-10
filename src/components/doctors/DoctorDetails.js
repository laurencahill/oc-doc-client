import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommentList from '../comments/CommentList';
import AddComment from '../comments/AddComment';

class DoctorDetails extends Component {
  constructor(props){
    super(props);
    this.state = {avgRating: 0};
}

componentDidMount(){
  this.getDoc();
}

getDoc = () => {
    const { params } = this.props.match;
    axios.get(process.env.REACT_APP_BASE_URL+`/doctors/${params.id}`)
    .then(response =>{
        const theDoc = response.data;
        this.setState(theDoc);
        console.log(">>>>>", this.state)
    })
    .catch((err)=>{
        console.log(err)
    })
}

deleteDoc = () => {
  const { params } = this.props.match;
  axios.delete(process.env.REACT_APP_BASE_URL+`/doctors/delete/${params.id}`)
  .then( response =>{
      this.props.history.push('/doctors'); 
  })
  .catch((err)=>{
      console.log(err)
  })
}
 
render(){
  var rating = this.state.avgRating
  console.log(rating.toFixed(1))
  return(
    <div>
      <h1>{this.state.docName}</h1>
      <p>Rating: {this.state.avgRating.toFixed(1)}</p>
      <p>Specialties: {this.state.specialties}</p>
      <p>Details: {this.state.docDetails}</p>
      <button onClick={() => this.deleteDoc()}>Delete Doctor</button>
      <Link to={`/doctors/edit/${this.state._id}`}>Edit Doctor</Link>
    <div>
    <CommentList theDoc= {this.state}/>
    </div>
    <div>
    <AddComment theDoc= {this.state} />
    </div>
    
    </div>
  )
}
}

export default DoctorDetails;