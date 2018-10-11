
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Doctor.css';

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
      <div>
      <div className="doc-slider"></div>
      <div className="page-doc-info">

          { this.state.listOfDocs.map((doctor, index) => {
            return (
              <div className="container-doc-info">
              <div className="form-doc-container">
              <div key={doctor._id}>
              <div className="doc-info">
              <div className="doc-col">
              <div className="img-doc-container">
              <img src={doctor.docImage} className="doc-img" alt="docImage"/>
              </div>
              <div className="btn-doc"><Link to={`/doctors/${doctor._id}`}>View Details</Link></div>
              </div>
              <div className="doc-right-col">

                <Link to={`/doctors/${doctor._id}`}>
                  <h3>{doctor.docName}</h3>
                </Link>

                <div className="doc-row">
                <div className="doc-right-col">
                <div className="label-doc-full">Average Rating:</div>
                <div className="input-doc-sm">{doctor.avgRating}</div>
                </div>
                <div className="doc-right-col">
                <div className="label-doc-full">Specialties:</div>
                <div className="input-doc-sm">{doctor.specialties}</div>
                </div>
                </div>
                <p className="label-doc-full">Details:</p>
                <div className="input-doc">{doctor.docDetails}</div>
                <div className="doc-row">
                <div className="doc-right-col">
                <p className="label-doc-full">City:</p>
                <div className="input-doc-sm">{doctor.docCity}</div>
                </div>
                <div className="doc-right-col">
                <p className="label-doc-full">State:</p>
                <div className="input-doc-sm">{doctor.docState}</div>
                </div>
                </div>
              </div>

              <div className="doc-info">  
                
                </div>
              </div>
        </div>
      </div>
      </div>
            )})
          }
    </div>
    </div>
    )
  }
}

export default DoctorList;