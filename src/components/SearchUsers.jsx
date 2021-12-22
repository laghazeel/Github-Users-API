import React, { Component } from 'react';

export class SearchUsers extends Component {

  state = {
    search: ''
  }

  handleForm = (e) => {
    this.setState({
      search:e.target.value
    })

  }

  searchUsers = (e) => {
    e.preventDefault();
    this.props.getUserSearch(this.state.search)
  }

  render() {
    const { search } = this.state;
    return (
      
        <form onSubmit={this.searchUsers}>
          <div className="form-group my-2">
            
            <input onChange={this.handleForm} value={search} placeholder='Search users...' id="search" type="text" className="form-control" />
          </div>
          <button className="btn btn-danger btn-block mb-2">Search</button>
        </form>
      
    );
  }
}

export default SearchUsers;
