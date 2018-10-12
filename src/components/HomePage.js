import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div>
                <div className="home-slider">
                    <div className="img-login">
                        <img src="../images/ocdoc_white.png" className="home-img" alt="" />
                    </div>
                    <h1 className="home-h1">Find the right ocularist for you. </h1>
                    <h3 className="home-h3">Search by name or location. Help others by leaving a review!</h3>
                    <div className="home-row">
                        <Link to={"/signup"}> <button className="btn-home">Signup</button> </Link>
                        <Link to={"/login"}> <button className="btn-home">Login</button> </Link>
                    </div>
                    <div className="chevron">
                        <img src="../images/chevron.png" className="chevron-img" alt="" />
                    </div>
                </div>
            </div>
        )
    }

}

export default HomePage;