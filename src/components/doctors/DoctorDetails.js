import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommentList from '../comments/CommentList';
import AddComment from '../comments/AddComment';
import './Doctor.css'

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
    <div className="doc-slider-2">
      <div className="page-doc-info">
        <div className="container-doc-info-2">
          <div className="doc-right-col">
            <h2 className="doc-title">{this.state.docName}</h2>
            <div className="doc-info">
              <div className="doc-col">
                <div className="img-doc-container-2">
                  <img src={this.state.docImage} className="doc-img-3" alt="docImage" />
                </div>
              </div>
              <div className="right-col">
                <div className="doc-row">
                  <div className="doc-right-col">
                    <div className="label-doc-full">Average Rating:</div>
                    <div className="input-doc-sm">{this.state.avgRating.toFixed(1)}</div>
                  </div>
                  <div className="doc-right-col">
                    <div className="label-doc-full">Specialties: </div>
                    <div className="input-doc-sm">{this.state.specialties}</div>
                  </div>
                </div>
                <div className="label-doc-full">Details:</div>
                <div className="input-doc">{this.state.docDetails}</div>
                <div className="doc-row">
                  <div className="doc-right-col">
                    <div className="label-doc-full">City:</div>
                    <div className="input-doc-sm">{this.state.docCity}</div>
                  </div>
                  <div className="doc-right-col">
                    <div className="label-doc-full">State:</div>
                    <div className="input-doc-sm">{this.state.docState}</div>
                  </div>
                </div>
                <div>
                  <div className="doc-row">
                    <div className="btn-doc-2" onClick={() => this.deleteDoc()}>Delete Doctor</div>
                    <Link to={`/doctors/edit/${this.state._id}`}><div className="btn-doc-2">Edit Doctor</div></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddComment theDoc={this.state} />
      </div>
    </div>
    <CommentList theDoc={this.state} />
  </div>
  )
}
}

export default DoctorDetails;