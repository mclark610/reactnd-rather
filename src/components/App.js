import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/initialData'
import {LoadingBar} from 'react-redux-loading-bar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Nav from './Nav'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Login from './Login'
import Leaderboard from './Leaderboard'

import PrivateRoute from './PrivateRoute'
import RouteQuestionType from './RouteQuestionType'
import InvalidPage from './InvalidPage'

//import { Container } from '@material-ui/core';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {   
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h2>Redux: Would you Rather</h2>
          </header>
          <LoadingBar scope="sectionBar" />
          <div className='container'>
            <Nav />
            {this.props.loading === true 
              ? null
              :
              <Switch>
                <Route path='/login' exact component={Login} />

                <PrivateRoute path='/add' exact >
                  <NewQuestion/>
                </PrivateRoute>

                <PrivateRoute path='/leaderboard' exact>
                  <Leaderboard/>
                </PrivateRoute>

                <PrivateRoute path='/questions/:id' exact>
                  <RouteQuestionType/>
                </PrivateRoute>

                <PrivateRoute path='/' exact>
                   <Dashboard />
                </PrivateRoute>

                <PrivateRoute path='/add' exact>
                   <NewQuestion />
                </PrivateRoute>

                <Route path='/'>
                  <InvalidPage />
                </Route>

            </Switch>
            }

          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    //loading: authedUser === null
    authedUser
  }
}

export default connect(mapStateToProps)(App);
