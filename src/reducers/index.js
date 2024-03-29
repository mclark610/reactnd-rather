import { combineReducers } from "redux"
import users from './users'
import authedUser from './authedUser'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    users,
    questions,
    authedUser,
    LoadingBar: loadingBarReducer
})
