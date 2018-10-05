
import React, { Component } from 'react';
import axios from 'axios';

class EditDoctor extends Component {
  constructor(props){
    super(props);
    this.state = {
        docName: this.props.theDoctor.docName, 
        specialties: this.props.theDoctor.specialties,
        // locationID: this.props.theDoctor.locationID, 
        docDetails: this.props.theDoctor.docDetails,
    }
  }

  handleFormSubmit = (event) => {
    const docName = this.state.docName;
    const specialties = this.state.specialties;
    const docDetails = this.state.docDetails;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/doctors/${this.props.theDoctor._id}`, {docName, specialties, docDetails, })
    .then( () => {
        this.props.getTheDoctor();
        // after submitting the form, redirect to '/doctors'
        this.props.history.push('/doctors');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeDocName = (event) => {  
    this.setState({
      docName:event.target.value
    })
  }

  handleChangeSpecialties = (event) => {  
    this.setState({
      specialties:event.target.value
    })
  }

  handleChangeDocDetails = (event) => {  
    this.setState({
      docDetails:event.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="docName" value={this.state.docName} onChange={e => this.handleChangeDocName(e)}/>
          <label>Specialties:</label>
          <input type="checkbox" name="specialties" value={this.state.specialties} onChange={e => this.handleChangeSpecialties(e)} />
          <label>Details:</label>
          <textarea name="details" value={this.state.docDetails} onChange={e => this.handleChangeDocDetails(e)} />
          
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    )
  }
}

export default EditDoctor;