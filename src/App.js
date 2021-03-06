import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import DoctorList from './components/doctors/DoctorList';
import AddDoctor from './components/doctors/AddDoctor';
import EditDoctor from './components/doctors/EditDoctor';
import DoctorDetails from './components/doctors/DoctorDetails';
import Signup from './components/users/Signup';
import Login from './components/users/Login';
import UserAccount from './components/users/UserAccount';
import AuthService from './components/auth/auth-service';
import EditUser from './components/users/EditUser';
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
        console.log("DIS DA RESPONSE YO", response)
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
        <Navbar setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />
        <div className="page">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/doctors" component={DoctorList} />
            <Route exact path="/doctors/create" component={AddDoctor} />
            <Route exact path="/doctors/:id" component={DoctorDetails} />
            <Route exact path="/doctors/edit/:id" component={EditDoctor} />
            <Route exact path="/login" render={() => <Login {...this.props} setTheUserInTheAppComponent={this.logMeIn} />} />
            <Route exact path='/signup' render={() => <Signup {...this.props} setTheUserInTheAppComponent={this.logMeIn} />} />
            <Route exact path="/edit/:id" render={() => <EditUser  {...this.props} userInSession={this.state.loggedInUser} />} />
            <Route exact path="/account/:id" component={UserAccount} />
          </Switch>
        </div>
        <Footer setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />
      </div>
    );
  }
}

export default App;