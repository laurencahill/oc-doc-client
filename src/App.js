import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DoctorList from './components/doctors/DoctorList';
import AddDoctor from './components/doctors/AddDoctor';
import Signup from './components/users/Signup';
import Login from './components/users/Login';
import AuthService from './components/auth/auth-service';


import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }

  logMeIn= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }


  render() {
    this.fetchUser();
    return (
      <div className="App">
        <Navbar  setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />
          <div className="page">
          <Switch>
            <Route exact path="/doctors" component={DoctorList}/>
            <Route exact path="/doctors/create" component={AddDoctor} />
            <Route exact path="/login" render={() => <Login setTheUserInTheAppComponent={this.logMeIn}/>}/>
            <Route exact path='/signup' render={() => <Signup setTheUserInTheAppComponent={this.logMeIn}/>}/>
          </Switch>
          </div>
 
      </div>
    );
  }
}

export default App;