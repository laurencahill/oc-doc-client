import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import EditDoctor from './EditDoctor';
import CommentList from '../comments/CommentList';
import AddComment from '../comments/AddComment';

class DoctorDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
}

componentDidMount(){
  this.getDoc();
}

getDoc = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/doctors/${params.id}`)
    .then(response =>{
        const theDoc = response.data;
        this.setState(theDoc);
    })
    .catch((err)=>{
        console.log(err)
    })
}

renderEditForm = () => {
  if(!this.state.docName){
      this.getDoc();
      } else {                                                                                      
      return <EditDoctor theDoc={this.state} getTheDoc={this.getDoc} {...this.props} />
      }
  }

deleteDoc = () => {
  const { params } = this.props.match;
  axios.delete(`http://localhost:5000/api/doctors/${params.id}`)
  .then( response =>{
      this.props.history.push('/doctors');     
  })
  .catch((err)=>{
      console.log(err)
  })
}
 
render(){
  return(
    <div>
      <h1>{this.state.docName}</h1>
      <p>{this.state.specialties}</p>
      <p>{this.state.docDetails}</p>
      <button onClick={() => this.deleteDoc()}>Delete Doctor</button>
      <button onClick={() => this.renderEditForm()}>Edit Doctor</button>
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