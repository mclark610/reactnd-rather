import '../data/_DATA.js'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import { getInitialData } from '../data/api.js';
import {showLoading,hideLoading} from 'react-redux-loading-bar'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users,questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            });
    }
}