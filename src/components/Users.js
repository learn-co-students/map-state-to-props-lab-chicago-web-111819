import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {
    return this.props.users.map(user => {
      return <li>{user.username}</li>
    })
  }


  render() {
    return (
      <div>
        <ul>
          Users!
          <p> User Count: {this.props.userCount} </p>

          { this.renderUsers() }

          <p> User Count: {this.props.userCount} </p>
          
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users, 
    userCount: state.users.length 
  }
}

export default connect(mapStateToProps)(Users)
