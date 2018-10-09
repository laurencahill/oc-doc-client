
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DoctorList extends Component {
  constructor(){
      super();
      this.state = { listOfDocs: [] };
  }

  getAllDoctors= () =>{
    axios.get(process.env.BASE_URL+`/doctors`)
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
        <div>
          { this.state.listOfDocs.map((doctor, index) => {
            return (
              <div key={doctor._id}>
              <img src="{doctor.docImage}" alt="docImage"/>
                <Link to={`/doctors/${doctor._id}`}>
                  <h3>{doctor.docName}</h3>
                </Link>
                <p>Average Rating: {doctor.avgRating}</p>
                <p>Specialties: {doctor.specialties}</p>
                <p>Details: {doctor.docDetails} </p>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default DoctorList;