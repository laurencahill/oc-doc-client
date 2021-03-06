import React, { Component } from 'react';
import axios from 'axios';
import '../users/User.css';

class EditUser extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.setState(this.props.userInSession)
  }

  componentWillReceiveProps(nextprops){
    this.setState(nextprops.userInSession)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const userImage = this.state.userImage;
    const username = this.state.username;
    const emailAddress = this.state.emailAddress;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const userLocation = this.state.userLocation;

    let formData= new FormData();

    formData.append('userImage', userImage);
    formData.append('username', username);
    formData.append('emailAddress', emailAddress);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('userLocation', userLocation);

    const { params } = this.props.match;
    axios.post(process.env.REACT_APP_BASE_URL+`/edit/${params.id}`, formData, {withCredentials: true})

    .then( (response) => {
        this.getUser();
        this.props.history.push('/account');   
    })
    .catch( error => console.log(error) )
  }

  handleChangeUserImage = (e) => {  
    switch (e.target.name) {
      case 'userImage':
      this.setState({ userImage:e.target.files[0] })
      break;
      default:
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleChangeUsername = (e) => {  
    this.setState({
      username:e.target.value
    })
  }

  handleChangeEmailAddress = (e) => {  
    this.setState({
      emailAddress:e.target.value
    })
  }

  handleChangeFirstName = (e) => {  
    this.setState({
      firstName:e.target.value
    })
  }

  handleChangeLastName = (e) => {  
    this.setState({
      lastName:e.target.value
    })
  }

  handleChangeUserLocation = (e) => {  
    this.setState({
      userLocation:e.target.value
    })
  }
  render(){
    if(this.state.username){

    return (
      <div className="user-slider">
        <div className="page-info">
          <div className="container-log-info">
            <div className="img-container">
              <img src={this.state.userImage} alt="" />
            </div>
            <div className="login-column">
              <form onSubmit={this.handleFormSubmit} encType="multipart/form-data" className="form-container">
                <input type="file" name="userImage" onChange={e => this.handleChangeUserImage(e)} />
                <label className="label-full">Username:</label>
                <input type="text" name="username" className="apply-input" value={this.state.username} onChange={e => this.handleChangeUsername(e)} />
                <label className="label-full">Email:</label>
                <input type="text" name="emailAddress" className="apply-input" value={this.state.emailAddress} onChange={e => this.handleChangeEmailAddress(e)} />
                <label className="label-full">First Name:</label>
                <input type="text" name="firstName" className="apply-input" value={this.state.firstName} onChange={e => this.handleChangeFirstName(e)} />
                <label className="label-full">Last Name:</label>
                <input type="text" name="lastName" className="apply-input" value={this.state.lastName} onChange={e => this.handleChangeLastName(e)} />
                <label className="label-full">Location:</label>
                <input type="text" name="userLocation" className="apply-input" value={this.state.userLocation} onChange={e => this.handleChangeUserLocation(e)} />
                <input type="submit" value="Save Changes" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return null
  }
  }
}

export default EditUser;