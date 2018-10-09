import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserAccount extends Component {
  constructor(){
      super();
      this.state = {};
  }

  getAccountDetails= () =>{
    axios.get(`http://localhost:5000/api/account`, {withCredentials: true})
    .then(response => {
      this.setState({
        userImage: response.data.theUser.userImage,
        username: response.data.theUser.username,
        emailAddress: response.data.theUser.emailAddress,
        firstName: response.data.theUser.firstName,
        lastName: response.data.theUser.lastName,
        userLocation: response.data.theUser.userLocation
      })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  deleteUser = () => {
    const { params } = this.props.match;
    console.log(">>>>>>>>>>>>>>calling delete function")
    axios.delete(`http://localhost:5000/api/delete/${params.id}`)
    .then( response =>{
      console.log("/////////////the response from delete", response)
        this.props.history.push('/signup');
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  componentDidMount() {
    this.getAccountDetails();
  }

  render(){
    return(
      <div className="page-info">
      <div className="container-info">
        <div className="login-column">
        <div className="img">
        <img src={this.state.userImage} alt="userImage"/>
        </div>
          <label className="label-full">Username:</label>{this.state.username}
          <label className="label-full">Email Address:</label>{this.state.emailAddress}
          <label className="label-full">First Name:</label>{this.state.firstName}
           <label className="label-full">Last Name:</label>{this.state.lastName}
          <label className="label-full">Location:</label>{this.state.userLocation}
        </div>
          <button onClick={() => this.deleteUser()}>Delete Account</button>
          <Link to={`/edit`}>Edit Account</Link>
      </div>
      </div>

    )
  }
}

export default UserAccount;