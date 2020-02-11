import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {

    const mapUsers = this.props.users.map(user => <li>{user.username} from {user.hometown}</li>)
    const countUsers = this.props.users.length

    return (
      <div>
        <ul>
          <h3>Users!</h3>
          Currently {countUsers} have been added to the store.
            {mapUsers}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
