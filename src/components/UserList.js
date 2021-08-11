import React from 'react'
import {connect} from 'react-redux'
import User from './User'
import {Grid, List } from '@material-ui/core'

class UserList extends React.Component {
    render() {
        const keys=Object.keys(this.props.users);        
        console.log("keys: " + keys);
        return(
          <div>
          <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
          <List id="userList" name="userList" component="nav">
            {
                keys.map( (userID) => (
                    <User key={userID} id={userID} />
                ))
            }
            </List>
            <label style={{paddingTop:'20px',color:'blue'}} htmlFor="userList">Please double-click user to continue...</label>
            </Grid>
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