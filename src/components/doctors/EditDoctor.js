import React, { Component } from 'react';
import axios from 'axios';

class EditDoctor extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const docName = this.state.docName;
    const specialties = this.state.specialties;
    const docDetails = this.state.docDetails;

    axios.put(process.env.REACT_APP_BASE_URL+`/doctors/edit/${this.state._id}`, {docName, specialties, docDetails},{withCredentials: true})
    .then( (response) => {
        this.getDoc();
        // after submitting the form, redirect to '/doctors'
        this.props.history.push('/doctors');   
    })
    .catch( error => console.log(error) )
  }

getDoc = () => {
    const { params } = this.props.match;
    axios.get(process.env.REACT_APP_BASE_URL+`/doctors/edit/${params.id}`)
    .then(response =>{
        const theDoc = response.data;
        this.setState(theDoc);
    })
    .catch((err)=>{
        console.log(err)
    })
}

  handleChangeDocName = (e) => {  
    this.setState({
      docName:e.target.value
    })
  }

  handleChangeSpecialties = (e) => {  
    this.setState({
      specialties:e.target.value
    })
  }

  handleChangeDocDetails = (e) => {  
    this.setState({
      docDetails:e.target.value
    })
  }

  componentDidMount(){
    this.getDoc();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="docName" value={this.state.docName} onChange={e => this.handleChangeDocName(e)}/>
          <label>Specialties:</label>
          <input type="text" name="specialties" value={this.state.specialties} onChange={e => this.handleChangeSpecialties(e)} />
          <label>Details:</label>
          <textarea name="details" value={this.state.docDetails} onChange={e => this.handleChangeDocDetails(e)} />
          
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    )
  }
}

export default EditDoctor;