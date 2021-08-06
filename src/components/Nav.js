import React from 'react';
import {NavLink} from 'react-router-dom'
import './nav.css'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

//<h4>Navigation: I will display the menu. New Question -- Leaderboard -- Login -- Name -- Logout</h4>

class Nav extends React.Component {
    render() {
        return(
          <nav>
            <NavLink className='doPadding' to='/' exact activeClassName='active'>
                Home
            </NavLink>

            <NavLink className='doPadding' to='/new' exact activeClassName='active'>
                New Question
            </NavLink>

            <NavLink className='doPadding' to='/leaderboard' exact activeClassName='active'>
                Leaderboard
            </NavLink>

            <NavLink className='doPadding' to='/login' exact activeClassName='active'>
                {this.props.authedUser ? this.props.authedUser : 'Login'}
            
            </NavLink>

            <NavLink className='doPadding' to='/' exact activeClassName='active' onClick={() => this.props.dispatch(setAuthedUser(null))}>
                Logout
            </NavLink>
            
          </nav>

        )
    }
}

function mapStateToProps({authedUser,users}) {
    console.log("authedUser: " + authedUser)
    console.log("type: " + typeof authedUser)
    console.log("authedUser: " + JSON.stringify(authedUser))
    
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Nav);
