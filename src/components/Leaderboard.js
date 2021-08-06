import React from 'react'
import {connect} from 'react-redux'

class Leaderboard extends React.Component {

    render() {
        const {users,userIDs} = this.props
        console.log("userID: " + JSON.stringify(userIDs))
        console.log("USERS:::" + JSON.stringify(users))
        return (
            <div>
                I am leaderboard.  I will display table of all data.

                <h2>Data Table</h2>
                <div>User Name</div>
                <div>User Picture</div>
                <div>questions asked</div>
                <div>answered questions</div>
                <div>total</div>
            <div>*users are sorted by total </div>
            <ul>
            {userIDs.map( (id) => (
                <li key={id}>
                  {users[id].name} - {users[id].avatarURL} - q{users[id].questions.length} - a{Object.keys(users[id].answers).length}
                </li>

            ))}
            </ul>

            </div>
        )
    }
}

function mapStateToProps({authedUser,users}) {
    return {
        userIDs: Object.keys(users)
        .sort((a,b) => ((Object.keys(users[b].answers).length + users[b].questions.length) - ( (Object.keys(users[a].answers).length + (users[a].questions).length)))),
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Leaderboard)
