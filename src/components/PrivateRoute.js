import React from 'react'
import {Route,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }
 

function PrivateRoute ( {children, ...rest }) {
   console.log("PrivateRoute:authedUser: " + rest.authedUser)
   console.log("PrivateRoute:rest: " + JSON.stringify(rest))
//   console.log("PrivateRoute:typeof: " + typeof this.props)
    return (
      <Route {...rest} render= {() => {
       console.log("PrivateRoute::return?")

      return rest.authedUser !== null
          ? children
          : <Redirect to='/login'/>
      }} />
    )
  }

  function mapStateToProps({authedUser}) {
    console.log("PrivateRoute:mapStateToProps::authedUser: " + authedUser)
    return {
      authedUser
    }
  }

export default withRouter(connect(mapStateToProps)(PrivateRoute))