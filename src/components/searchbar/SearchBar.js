import React, { Component } from 'react';
import './Search.css';


class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            val:""
        }
    }

    updateInput = (e) =>{
        this.setState({val: e.target.value});
        this.props.handleSearch(e.target.value)

    }

    render(){
        return(
            <div>
                <div className="search-title">
                    <h1 className="search-h1">Find the right ocularist for you. </h1>
                    <h3 className="search-h3">Search by name or location. Help others by leaving a review!</h3>
                </div>
                <div className="field">
                    <div className="control">
                        <input onChange={e => this.updateInput(e)} value={this.state.val} type="text" placeholder="search by name, city or state" className="search-input" />
                    </div>
                    <div className="chevron">
                        <img src="../images/chevron.png" className="chevron-img-doc" alt="" />
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchBar;