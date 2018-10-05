
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddDoctor from './AddDoctor';

class DoctorList extends Component {
  constructor(){
      super();
      this.state = { listOfDoctors: [] };
  }

  getAllDoctors= () =>{
    axios.get(`http://localhost:5000/api/doctors`)
    .then(responseFromApi => {
      this.setState({
        listOfDoctors: responseFromApi.data
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
          { this.state.listOfDoctors.map((doctor, index) => {
            return (
              <div key={doctor._id}>
                <Link to={`/doctors/${doctor._id}`}>
                  <h3>{doctor.docName}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{doctor.docDetails} </p>
              </div>
            )})
          }
        </div>
        {/* <div style={{width: '40%', float:"right"}}>
            <AddDoctor getData={() => this.getAllDoctors()}/>
        </div> */}
      </div>
    )
  }
}

export default DoctorList;