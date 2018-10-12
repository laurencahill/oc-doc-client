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
            <NavLink to={"/"}><img src="./images/ocdoc_white.png" width="150px" alt="OcDoc" /></NavLink>
          </div>
          <nav className="nav-style">
            <ul>
              <li>
                <NavLink to="/doctors" activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} className="navlink">Find an ocularist</NavLink>
              </li>
              <li>
                <NavLink to="/doctors/create" activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} className="navlink">Add your ocularist</NavLink>
              </li>
              <li>
                <NavLink to={`/account/${this.state.loggedInUser._id}`} activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} className="navlink">View account</NavLink>
              </li>
              <li>
                <NavLink to="/logout" activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} onClick={() => this.logout()}className="navlink" >Logout</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="nav">
          <div className="logo">
            <img src="./images/ocdoc_white.png" width="150px" alt="OcDoc" />
          </div>
          <nav className="nav-style">
            <ul>
              <li>
                <NavLink to="/doctors" activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} className="navlink">Find an ocularist</NavLink>
              </li>
              <li>
                <NavLink to="/doctors/create" activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} className="navlink">Add your ocularist</NavLink>
              </li>
              <li>
                <NavLink to="/signup" activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} className="navlink">Signup</NavLink>
              </li>
              <li>
                <NavLink to="/login" activeStyle={{ fontWeight: 'bold', color: 'turquoise' }} className="navlink">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )
    }
    }
  }

  export default Navbar;
