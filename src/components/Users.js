import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!<br /><br />
          {
            this.props.users.map((user, i) => {
              return <li key={i}>{user.username}</li>
            })
          }
          <br /><hr />
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
let mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
