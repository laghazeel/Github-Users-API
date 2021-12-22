import React, { Component } from 'react';
import axios from 'axios';
import UserCom from './UserCom';
import SearchUsers from '../SearchUsers';

export class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  getUsers = () => {
    axios.get('https://api.github.com/users')
        .then(Response => {
            this.setState({
              users: Response.data
            })
        })
  }

  componentDidMount() {
    this.getUsers();
  }

  SearchUsersFromGit = (data) => {
    if(data !='')
      axios.get(`https://api.github.com/search/users?q=${data}`) 
          .then(Response => {
             this.setState({
               users: Response.data.items
             })

          })

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <SearchUsers  getUserSearch={this.SearchUsersFromGit} />
          </div>
        </div>
        <div className="row">
          {this.state.users.map(user => (
            <div className="col-md-4 mb-3" key={user.id} >
               <UserCom user={user}/>              
            </div>

          ))}
        </div>
      </div>
    );
  }
}

export default Users;
