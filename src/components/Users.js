import React, { Component } from 'react';
import {connect} from 'react-redux'


class Users extends Component {

  renderUsers = () => {
    return this.props.users.map((userObj, index) => {
      return <li key={index}>{userObj.username}</li>
    })
  }

  render() {
    return (
      <div>
          <p>there are {this.props.totalusers} users total</p>
        <ul>
          Users!
          <br/>
          {this.renderUsers()}
          <br/>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    totalusers: state.users.length
  }
}


export default connect(mapStateToProps)(Users)
