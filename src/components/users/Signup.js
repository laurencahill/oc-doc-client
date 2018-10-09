import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import {Link} from 'react-router-dom' 

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', emailAddress: '', firstName: '', lastName: '', userLocation: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const emailAddress = this.state.emailAddress;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const userLocation = this.state.userLocation;
   
  
    this.service.signup(username, password, emailAddress, firstName, lastName, userLocation)
    .then( theUserObject => {
        this.setState({
            username: "", 
            password: "",
            emailAddress: "",
            firstName: "",
            lastName: "",
            userLocation: ""
        });
        this.props.setTheUserInTheAppComponent(theUserObject)
        this.props.history.push('/doctors'); 
      })
       .catch( error => console.log(error) )
      }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      
  render(){
    return(
      <div className="page-info">
      <div className="container-info">
        <form onSubmit={this.handleFormSubmit} className="form-container">
        <div className="login-column">
          <label className="label-full">Username:</label>
          <input type="text" name="username" className="apply-input" value={this.state.username} placeholder="johndoe" onChange={ e => this.handleChange(e)}/>
          <label className="label-full">Password:</label>
          <input name="password" className="apply-input" value={this.state.password} placeholder="*******" onChange={ e => this.handleChange(e)} />
          <label className="label-full">Email Address:</label>
          <input type="email" name="emailAddress" className="apply-input" value={this.state.emailAddress} placeholder="john@doe.com" onChange={ e => this.handleChange(e)}/>
          <label className="label-full">First Name:</label>
          <input type="text" name="firstName" className="apply-input" value={this.state.firstName} placeholder="John" onChange={ e => this.handleChange(e)} />
           <label className="label-full">Last Name:</label>
          <input type="text" name="lastName" className="apply-input" value={this.state.lastName} placeholder="Doe" onChange={ e => this.handleChange(e)}/>
          <label className="label-full">Location:</label>
          <input type="text" name="userLocation" className="apply-input" value={this.state.userLocation} placeholder="city, state, country" onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Signup" />
        </div>
        </form>
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
      </div>
      </div>
    )
  }

}

export default Signup;