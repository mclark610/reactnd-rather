import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/initialData'
import Users from './Users'
import Questions from './Questions'
import {LoadingBar} from 'react-redux-loading-bar'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>notes</h2>
        </header>
        <section>
          <LoadingBar scope="sectionBar" />
        </section>
        <div className='container'>
          <Users />
          <Questions />
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
