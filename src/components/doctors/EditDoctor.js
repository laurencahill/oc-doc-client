import React, { Component } from 'react';
import axios from 'axios';
import '../users/User.css';

class EditDoctor extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const docImage =    this.state.docImage;
    const docName =     this.state.docName;
    const specialties = this.state.specialties;
    const docDetails =  this.state.docDetails;
    const docCity =     this.state.docCity;
    const docState =    this.state.docState

    let formData = new FormData();

    formData.append('docImage', docImage);
    formData.append('docName', docName);
    formData.append('specialties', specialties);
    formData.append('docDetails', docDetails);
    formData.append('docCity', docCity);
    formData.append('docState', docState);

    const { params } = this.props.match;
    axios.put(process.env.REACT_APP_BASE_URL+`/doctors/edit/${params.id}`, formData ,{withCredentials: true})
    .then( (response) => {
       this.getDoc();
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

  handleChangeDocCity = (e) => {  
    this.setState({
      docCity:e.target.value
    });
  }

  handleChangeDocState = (e) => {  
    this.setState({
      docState:e.target.value
    });
  }

  componentDidMount(){
    this.getDoc();
  }

render(){
 return (
   <div>
     <div className="doc-slider-3">
       <div className="page-info">
         <div className="container-log-info">
           <img src={this.state.docImage} className="img-doc-container" alt="" />
           <div className="login-column">
             <form onSubmit={this.handleFormSubmit} encType="multipart/form-data" className="form-container">
               <input type="file" name="docImage" onChange={e => this.handleChangeDocImage(e)} />
               <label className="label-full">Name:</label>
               <input type="text" name="docName" className="apply-input" value={this.state.docName} onChange={e => this.handleChangeDocName(e)} />
               <label className="label-full">Specialties:</label>
               <input type="text" name="specialties" className="apply-input" value={this.state.specialties} onChange={e => this.handleChangeSpecialties(e)} />
               <label className="label-full" >Details:</label>
               <input type="text" name="details" className="apply-input" value={this.state.docDetails} onChange={e => this.handleChangeDocDetails(e)} />
               <label className="label-full">City:</label>
               <input type="text" name="docCity" className="apply-input" value={this.state.docCity} onChange={e => this.handleChangeDocCity(e)} />
               <label className="label-full">State:</label>
               <input type="text" name="docState" className="apply-input" value={this.state.docState} onChange={e => this.handleChangeDocState(e)} />
               <input type="submit" value="Save Changes" className="btn" />
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>  
    )
  }
}

export default EditDoctor;