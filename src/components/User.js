import React from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {withRouter} from 'react-router-dom'

class User extends React.Component {
    onClicked = (e) => {       
        const {dispatch,user} = this.props
        
        console.log("user: " + JSON.stringify(user))
        console.log("user[id]:" + user["id"])
        dispatch(setAuthedUser({id:user["id"]}));

//        this.props.history.push('/leaderboard')

    }
    
    render() {               
        return(
        <div>
          <div className="card"> 
            <li onClick={this.onClicked} key={this.props.user.id}>{this.props.user.name}</li>
          </div>
      </div>
      )
    }
}

function mapStateToProps({users},{id}) {     
    const user = users[id]
    return {
        user
    }
}
export default withRouter(connect(mapStateToProps)(User))