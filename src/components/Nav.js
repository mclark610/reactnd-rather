import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.css'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import { Button } from '@material-ui/core'

/**
* @description The navigation bar.  This allows the user to select which screen to visit
* @constructor
* @param {object} authedUser - The authorized userID that may answer the question
* @param {array} users       - array of all users in the game
*/

class Nav extends React.Component {
  render() {
    return (

      <nav>
        <Button component={NavLink} variant='text' color='primary' size='large' to="/" exact activeClassName='active' className='doPadding'>
          Home
        </Button>

        <Button component={NavLink} variant='text' color='primary' size='large' to="/add" exact activeClassName='active' className='doPadding'>
          New Question
        </Button>

        <Button component={NavLink} variant='text' color='primary' size='large' to="/leaderboard" exact activeClassName='active' className='doPadding'>
          Leaderboard
        </Button>

        <Button component={NavLink} variant='text' color='primary' size='large' to="/login" exact activeClassName='active' className='doPadding'>
          {this.props.authedUser ? this.props.users[this.props.authedUser].name : 'Login'}
        </Button>
        <Button component={NavLink} variant='text' color='primary' size='large' to="/" exact activeClassName='active' onClick={() => this.props.dispatch(setAuthedUser(null))} className='doPadding'>
          Logout
        </Button>

      </nav>

    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Nav);
