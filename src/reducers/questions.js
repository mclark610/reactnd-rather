import {RECEIVE_QUESTIONS,ADD_QUESTION, ADD_ANSWER} from '../actions/questions'

export default function questions( state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case ADD_ANSWER:
            const {authedUser,qid,answer} = action

            console.log("action.answer: " + answer)
            console.log("qid: " + qid)
            console.log("answer: " + answer)
            console.log("questions: " + JSON.stringify(state))
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }
            }
        default:
            return state
    }
}