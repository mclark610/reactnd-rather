import { saveQuestion,saveQuestionAnswer } from "../data/api"
import { showLoading,hideLoading} from 'react-redux-loading-bar'
import { addQuestionToUser,addAnswerToUser} from "../actions/users"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER   = 'ADD_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addAnswer(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleAddAnswer(authedUser,qid,answer) {
    return (dispatch) =>  {

        dispatch(showLoading())
        
        // save data to simulated database
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => {
            // save to redux questions state
            return dispatch(addAnswer(authedUser, qid, answer))
        })
        .then(() => {
            // save to redux users state
            return dispatch(addAnswerToUser(authedUser, qid, answer))
        })
        .then(() => {
            return dispatch(hideLoading())
        })

        
    }
}

// set graphics loader
// send question data to api
// if it saves properly, add the question to redux state.
// turn off the graphics loader
export function handleAddQuestion(optionOneText,optionTwoText) {
    return (dispatch,getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author:authedUser,
        })
        .then((question) => {
            console.log("question is " + JSON.stringify(question))
            return dispatch(addQuestion(question))
        })
        .then((question) => {
            return dispatch(addQuestionToUser(question))
        })
        .then(()=> dispatch(hideLoading()))

    }
}