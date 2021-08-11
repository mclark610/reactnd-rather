import React from 'react'
import { connect } from 'react-redux'

class Users extends React.Component {
  render() {
    const { users } = this.props;

    const keys = Object.keys(users)

    return (
      <div>
        <h2>Users</h2>
        <ul>
          {keys.map((key) => (
            <li key={key}>
              {users[key].name}
            </li>

          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Users)