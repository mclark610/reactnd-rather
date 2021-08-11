import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

import { ListItemAvatar, Avatar } from '@material-ui/core'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//TODO: disableFocusRipple when using doubleclick.  
// see:https://material-ui.com/api/button/


class User extends React.Component {
  onClicked = (e) => {
    const { dispatch, user } = this.props

    dispatch(setAuthedUser(user["id"]))

    this.props.history.push('/')
  }

  render() {
    const { name, avatarURL } = this.props.user
    return (
      <div>
        <ListItem button onDoubleClick={this.onClicked} key={this.props.user.id}>
          <ListItemAvatar>
            <Avatar alt={name} src={avatarURL} />
          </ListItemAvatar>
          <ListItemText>
            {this.props.user.name}
          </ListItemText>
        </ListItem>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id]
  return {
    user,

  }
}
export default withRouter(connect(mapStateToProps)(User))