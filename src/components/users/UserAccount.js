import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../users/User.css';

class UserAccount extends Component {
  constructor(){
      super();
      this.state = {};
  }

  getAccountDetails= () =>{
    const { params } = this.props.match;
    axios.get(process.env.REACT_APP_BASE_URL+`/account/${params.id}`, {withCredentials: true})
    .then(response => {
      this.setState({
        userImage:    response.data.theUser.userImage,
        username:     response.data.theUser.username,
        emailAddress: response.data.theUser.emailAddress,
        firstName:    response.data.theUser.firstName,
        lastName:     response.data.theUser.lastName,
        userLocation: response.data.theUser.userLocation
      })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  deleteUser = () => {
    const { params } = this.props.match;
    axios.delete(process.env.REACT_APP_BASE_URL+`/delete/${params.id}`)
    .then( response =>{
        this.props.history.push('/logout');
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  componentDidMount() {
    this.getAccountDetails();
  }

  render(){
    const { params } = this.props.match;
    return(
      <div className="user-slider">
        <div className="page-info">
          <div className="container-log-info">
            <div className="img-container">
              <img src={this.state.userImage} className="user-img" alt="" />
            </div>
            <div className="login-column">
              <div className="form-container">
                <label className="label-full">Username:</label>
                <div className="apply-input">{this.state.username}</div>
                <label className="label-full">Email:</label>
                <div className="apply-input">{this.state.emailAddress}</div>
                <label className="label-full">First Name:</label>
                <div className="apply-input">{this.state.firstName}</div>
                <label className="label-full">Last Name:</label>
                <div className="apply-input">{this.state.lastName}</div>
                <label className="label-full">Location:</label>
                <div className="apply-input">{this.state.userLocation}</div>
                <Link to={`/edit/${params.id}`} className="btn">Edit Account</Link>
                <p onClick={() => this.deleteUser()}>Delete Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserAccount;