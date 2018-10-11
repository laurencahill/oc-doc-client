import React, { Component } from 'react';
import axios from 'axios';


class AddDoctor extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }
  // docImage:"", docName: "", specialties:[], docDetails:"" 
   
  componentDidMount(){
    this.setState(this.props.userInSession)
  }

  componentWillReceiveProps(nextprops){
    this.setState(nextprops.userInSession)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const docImage = this.state.docImage;
    const docName = this.state.docName;
    const specialties = this.state.specialties;
    const docDetails = this.state.docDetails;

    let formData = new FormData();

    formData.append('docImage', docImage);
    formData.append('docName', docName);
    formData.append('specialties', specialties);
    formData.append('docDetails', docDetails);

  
    axios.post(process.env.REACT_APP_BASE_URL+"/doctors/create", formData, {withCredentials: true} )
    .then( (response) => {
        this.props.history.push('/doctors');
    })
    .catch( error => console.log(error) )
  }

  // this.setState({ docImage: "", docName: "", specialties:[], docDetails:""});

  handleChangeDocImage = (e) => {        
      switch (e.target.name) {
        case 'docImage':
        this.setState({ docImage:e.target.files[0] })
        break;
        default:
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleChangeDocName = (e) => {
      this.setState({
        docName:e.target.value
      });
  }

  handleChangeSpecialties = (e) => { 
    this.setState({
      specialties:e.target.value
    });
  }

  handleChangeDocDetails = (e) => {  
    this.setState({
      docDetails:e.target.value
    });
  }

  render(){
    return(
      <div className="page-info">
      <div className="container-info">
      <div className="login-column">
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data" className="form-container">
        <input type="file" name="userImage" className="apply-input" onChange={e => this.handleChangeDocImage(e)} />
          <label className="label-full">Name:</label>
          <input type="text" name="docName" className="apply-input" value={this.state.docName} onChange={ e => this.handleChangeDocName(e)}/>
          <label className="label-full">Specialties:</label>
          <input type="text" name="specialties" className="apply-input" value={this.state.specialties} onChange={ e => this.handleChangeSpecialties(e)}/>
          <label className="label-full">Details:</label>
          <input type="text" name="docDetails" className="apply-input" value={this.state.docDetails} onChange={ e => this.handleChangeDocDetails(e)}/>
          <input type="submit" value="Submit Doctor" className="btn"/>
        </form>
      </div>
      </div>
      </div>
    )
  }
}

export default AddDoctor;