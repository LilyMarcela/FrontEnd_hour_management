import React, { Component } from 'react';
import apiRequest from '../../api/apiRequest';
import UsersTable from '../UI/UsersTable';
import { Container } from '@material-ui/core';


class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: []
     };
  }
  componentDidMount() {
    this.fetchUsers()
  }
  fetchUsers = async() => {
    const { data } = await apiRequest.get('/users')
    this.setState({
      users: data
    })
  }

  renderUsersList() {
    const users = this.state.users
    return (
      users.map(user => (
        <UsersTable
          key={ user.id }
          user={ user }
        />
      ))
    )
  }
  render() {
    return (
      <Container maxWidth='md'
      >{ this.renderUsersList() }</Container>
    );
  }
}

export default ListUsers;