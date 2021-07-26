import React from 'react'
import {connect} from 'react-redux'

class Users extends React.Component {
    render() {
        const {users} = this.props;
        console.log("users from Users: " + JSON.stringify(users))
        const keys = Object.keys(users)
        console.log("keys: " + JSON.stringify(keys));
        return (
            <div>
            <h2>Users</h2>
            <ul>
            {keys.map( (key) => (
                <li key={key}>
                  {users[key].name}
                </li>

            ))}
            </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Users)