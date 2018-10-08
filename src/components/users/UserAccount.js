import React, { Component } from 'react';
import axios from 'axios';

class UserAccount extends Component {
  constructor(){
      super();
      this.state = {};
  }

  getAccountDetails= () =>{
    axios.get(`http://localhost:5000/api/account`)
    .then(response => {
      this.setState({
        accountDetails: response.data
      })
    })
    .catch((err)=>{
        console.log(err);
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
          <label className="label-full">Username:</label>{this.state.username}
          <label className="label-full">Password:</label>{this.state.password}
          <label className="label-full">Email Address:</label>{this.state.emailAddress}
          <label className="label-full">First Name:</label>{this.state.firstName}
           <label className="label-full">Last Name:</label>{this.state.lastName}
          <label className="label-full">Location:</label>{this.state.userLocation}
        </div>
      </div>
      </div>

    )
  }
}

export default UserAccount;