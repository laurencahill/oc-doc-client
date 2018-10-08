
import React, { Component } from 'react';
import axios from 'axios';


class AddDoctor extends Component {
  constructor(props){
      super(props);
      this.state = { docName: "", specialties:[], docDetails:"" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const docName = this.state.docName;
    const specialties = this.state.specialties;
    const docDetails = this.state.docDetails;
    axios.post("http://localhost:5000/api/doctors/create", {docName, specialties, docDetails})
    .then( () => {
        this.props.getData();
        this.setState({ docName: "", specialties:[], docDetails:""});
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

        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="docName" value={this.state.docName} onChange={ e => this.handleChange(e)}/>
          <label>Specialties:</label>
          <input type="text" name="specialties" value={this.state.specialties} onChange={ e => this.handleChange(e)}/>
          <label>Details:</label>
          <input type="text" name="docDetails" value={this.state.docDetails} onChange={ e => this.handleChange(e)}/>
          <input type="submit" value="Submit Doctor" />
        </form>

      </div>
    )
  }
}

export default AddDoctor;