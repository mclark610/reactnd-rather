import '../data/_DATA.js'
import {setAuthedUser} from './authedUser'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import { getInitialData } from '../data/api.js';
import {showLoading,hideLoading} from 'react-redux-loading-bar'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users,questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            });
    }
}
