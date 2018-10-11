
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DoctorList extends Component {
  constructor(){
      super();
      this.state = { listOfDocs: [] };
  }

  getAllDoctors= () =>{
    axios.get(process.env.REACT_APP_BASE_URL+"/doctors")
    .then(response => {
      this.setState({
        listOfDocs: response.data.listOfDocs
      })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  componentDidMount() {
    this.getAllDoctors();
  }

  render(){
    return(
      <div className="page-info">
      <div className="container-info">
          { this.state.listOfDocs.map((doctor, index) => {
            return (
              <div key={doctor._id}>
              <div className="img-container">
              <img src={doctor.docImage} alt="docImage"/>
              </div>
                <Link to={`/doctors/${doctor._id}`}>
                  <h3>{doctor.docName}</h3>
                </Link>
                <p className="label-full">Average Rating:</p>
                <div className="apply-input">{doctor.avgRating}</div>
                <p className="label-full">Specialties:</p>
                <div className="apply-input">{doctor.specialties}</div>
                <p className="label-full">Details:</p>
                <div className="apply-input">{doctor.docDetails}</div>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default DoctorList;