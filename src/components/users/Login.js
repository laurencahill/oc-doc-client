import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import {Link} from 'react-router-dom' 
import './User.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.login(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.setTheUserInTheAppComponent(response)
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
      <div className="user-slider">
        <div className="page-info">
          <div className="container-log-info">
            <form onSubmit={this.handleFormSubmit} className="form-container">
              <div className="login-column">
                <div className="img-login">
                  <img src="../images/ocdoc3.png" className="login-img" alt="" />
                </div>
                <label className="label-full">Username:</label>
                <input type="text" name="username" className="login-input" value={this.state.username} onChange={e => this.handleChange(e)} />
                <label className="label-full">Password:</label>
                <input name="password" className="login-input" value={this.state.password} onChange={e => this.handleChange(e)} />
              </div>
              <input type="submit" className="btn" value="Login" />
            </form>
            <p>Don't have an account? <Link to={"/signup"}> Signup</Link></p>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;