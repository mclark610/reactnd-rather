import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ children, ...rest }) {

  return (
    <Route {...rest} render={() => {
      console.log("rest: " + JSON.stringify(rest))

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