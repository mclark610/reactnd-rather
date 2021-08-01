import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/initialData'
import {LoadingBar} from 'react-redux-loading-bar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Login from './Login'
import Leaderboard from './Leaderboard'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {   
    return (
      <Router>
        <Fragment>
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
              <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/new' exact component={NewQuestion} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/login' exact component={Login} />
            </div>
            }
          </div>
        </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
