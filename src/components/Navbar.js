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
        <img src="./images/ocdoc3.png" width="150px" alt="OcDoc"/>
        </div>
        <nav className="nav-style">
          <ul>
            <li>
            <NavLink to="/doctors" activeStyle={{fontWeight: 'bold', color: 'blue'}}>Find an ocularist</NavLink>
            </li>
            <li>
            <NavLink to="/doctors/create" activeStyle={{fontWeight: 'bold', color: 'blue'}}>Add your ocularist</NavLink>
            </li>
            <li>
            <NavLink to="/account" activeStyle={{fontWeight: 'bold', color: 'blue'}}>View account</NavLink>
            </li>
            <li>
            <NavLink to="/logout" activeStyle={{fontWeight: 'bold', color: 'blue'}} onClick={()=>this.logout()}>Logout</NavLink>
            </li>
          </ul>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="nav">
        <div className="logo">
        <img src="./images/ocdoc3.png" width="150px"  alt="OcDoc"/>
        </div>

        <nav className="nav-style">
          <ul>
            <li>
            <NavLink to="/doctors" activeStyle={{fontWeight: 'bold', color: 'blue'}}>Find an ocularist</NavLink>
            </li>
            <li>
            <NavLink to="/doctors/create" activeStyle={{fontWeight: 'bold', color: 'blue'}}>Add your ocularist</NavLink>
            </li>
            <li>
            <NavLink to="/account" activeStyle={{fontWeight: 'bold', color: 'blue'}}>View account</NavLink>
            </li>
            <li>
            <NavLink to="/signup" activeStyle={{fontWeight: 'bold', color: 'blue'}}>Signup</NavLink>
            </li>
            <li>
            <NavLink to="/login" activeStyle={{fontWeight: 'bold', color: 'blue'}}>Login</NavLink>
            </li>
          </ul>
          </nav>
        </div>
      )
    }
    }
  }

  export default Navbar;
