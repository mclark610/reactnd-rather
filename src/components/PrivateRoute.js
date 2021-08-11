import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// TODO: add error message feature?

/**
* @description PrivateRoute  - a great object that checks if the user is currently
*                              authorized to use the given route.  
*                              Perfect demonstration of how to use ...rest feature
* @constructor
* @param {object} authedUser - The authorized userID that may answer the question
*/

function PrivateRoute({ children, ...rest }) {

  return (
    <Route {...rest} render={() => {

      return rest.authedUser !== null
        ? children
        : <Redirect to='/login' />
    }} />
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))