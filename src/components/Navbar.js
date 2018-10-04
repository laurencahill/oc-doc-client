import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from './auth/auth-service';
import '../App.css';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ loggedInUser: nextProps["userInSession"]})
  }


  logout = () =>{
    this.service.logout()
    .then(()=>{
      this.props.setTheUserInTheAppComponent(null)
    })
  }
    
  render(){
    if(this.state.loggedInUser){
      return(
        <div className="nav">
        <div className="logo">
        <img src="./images/logo.png" width="50px" alt="Logo"/>
        </div>
        <nav className="nav-style">
          <ul>
            <li>
            <NavLink to="/doctors" activeStyle={{fontWeight: 'bold', color: 'blue'}}>DOCTORS</NavLink>
            </li>
            <li>
            <NavLink to="/doctors/create" activeStyle={{fontWeight: 'bold', color: 'blue'}}>SUBMIT</NavLink>
            </li>
            <li>
            <NavLink to="/account" activeStyle={{fontWeight: 'bold', color: 'blue'}}>ACCOUNT</NavLink>
            </li>
            <li>
            <NavLink to="/logout" activeStyle={{fontWeight: 'bold', color: 'blue'}} onClick={()=>this.logout()}>LOGOUT</NavLink>
            </li>
          </ul>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="nav">
        <div className="logo">
        <img src="./images/logo.png" width="50px" alt="Logo"/>
        </div>

        <nav className="nav-style">
          <ul>
            <li>
            <NavLink to="/doctors" activeStyle={{fontWeight: 'bold', color: 'blue'}}>DOCTORS</NavLink>
            </li>
            <li>
            <NavLink to="/doctors/create" activeStyle={{fontWeight: 'bold', color: 'blue'}}>SUBMIT</NavLink>
            </li>
            <li>
            <NavLink to="/account" activeStyle={{fontWeight: 'bold', color: 'blue'}}>ACCOUNT</NavLink>
            </li>
            <li>
            <NavLink to="/signup" activeStyle={{fontWeight: 'bold', color: 'blue'}}>SIGNUP</NavLink>
            </li>
            <li>
            <NavLink to="/login" activeStyle={{fontWeight: 'bold', color: 'blue'}}>LOGIN</NavLink>
            </li>
          </ul>
          </nav>
        </div>
      )
    }
    }
  }

  export default Navbar;
