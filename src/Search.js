import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            searchKey: ''
        };

        this.state = this.initialState;
    
    }

    handleChange = event => {
        this.setState({searchKey : event.target.value});
        if (event.target.value === ""){
            this.props.handleSearchSubmit({searchKey : ""});
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSearchSubmit(this.state);
    }

    render() {
        const {searchKey} = this.state;
        return(
            <div className="pt-4">
                <form onSubmit={this.submitForm}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-group input-group-lg">
                                <input type="text" name="searchKey" className="form-control" value={searchKey} 
                                    onChange={this.handleChange} />
                                <button type="button" className="btn btn-success">
                                    <span className="glyphicon glyphicon-search" onClick={this.submitForm}></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;