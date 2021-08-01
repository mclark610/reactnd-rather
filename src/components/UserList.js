import React from 'react'
import {connect} from 'react-redux'
import User from './User'

class UserList extends React.Component {
    render() {
        const keys=Object.keys(this.props.users);
        console.log("keys: " + keys);
        return(
          <div>
            <h2>UserList</h2>
            
            <label htmlFor="users">Choose a user:</label>
            <ul className="users" id="users">
            {
                keys.map( (userID) => (
                    <User key={userID} id={userID}  />
                ))
            }
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

export default connect(mapStateToProps)(UserList)