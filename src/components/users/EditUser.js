import React, { Component } from 'react';
import axios from 'axios';

class EditUser extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const userImage = this.state.userImage;
    const username = this.state.username;
    const emailAddress = this.state.emailAddress;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const userLocation = this.state.userLocation;
    // const user = this.state.loggedInUser
    console.log("~~~~~~~~~~~~updating user info")
    axios.post(`http://localhost:5000/api/edit`, {userImage, username, emailAddress, firstName, lastName, userLocation},{withCredentials: true})
    .then( (response) => {
      console.log("```````````````response from update", response)
        this.getUser();
        this.props.history.push('/account');   
    })
    .catch( error => console.log(error) )
  }

getUser = () => {
    // const { params } = this.props.match;
    axios.post(`http://localhost:5000/api/edit`)
    .then(response =>{
        const theUser = response.data;
        this.setState(theUser);
    })
    .catch((err)=>{
        console.log(err)
    })
}
  handleChangeUserImage = (e) => {  
    this.setState({
      userImage:e.target.value
    })
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

  componentDidMount(){
    this.getUser();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>User Image:</label>
          <input type="file" name="userImage" />
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChangeUsername(e)}/>
          <label>Email Address:</label>
          <input type="text" name="emailAddress" value={this.state.emailAddress} onChange={e => this.handleChangeEmailAddress(e)} />
          <label>First Name:</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={e => this.handleChangeFirstName(e)} />
          <label>Last Name:</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={e => this.handleChangeLastName(e)} />
          <label>Location:</label>
          <input type="text" name="userLocation" value={this.state.location} onChange={e => this.handleChangeUserLocation(e)} />
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    )
  }
}

export default EditUser;