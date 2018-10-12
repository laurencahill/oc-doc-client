import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from './auth/auth-service';
import '../App.css';


class Footer extends Component {
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
        <div className="footer">
          <nav className="footer-style">
          <nav className="nav-style">
            <ul>
            <li>
                <NavLink to="/" activeStyle={{ fontWeight: 'lighter', color: 'white' }}>© Copyright 2018</NavLink>
              </li>
              <li>
                <NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'white' }}>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'white' }}>Terms of Service</NavLink>
              </li>
            </ul>
          </nav>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="footer">
        <nav className="footer-style">
        <nav className="nav-style">
          <ul>
          <li>
                <NavLink to="/" activeStyle={{ fontWeight: 'lighter', color: 'white' }}>© Copyright 2018</NavLink>
              </li>
            <li>
              <NavLink to="/" activeStyle={{ fontWeight: 'lighter', color: 'white' }}>Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={{ fontWeight: 'lighter', color: 'white' }}>Terms of Service</NavLink>
            </li>
          </ul>
          </nav>
        </nav>
      </div>
      )
    }
    }
  }

  export default Footer;
