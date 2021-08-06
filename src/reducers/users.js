import {RECEIVE_USERS,ADD_QUESTION_TO_USER,ADD_ANSWER_TO_USER} from '../actions/users'

export default function users( state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
            
        case ADD_QUESTION_TO_USER:
            const {question} = action.question
            console.log("state: " + JSON.stringify(state))
            console.log("action: " + JSON.stringify(action))
            console.log("question: " + JSON.stringify(question)) //ok
            console.log("author to update:  " + question.author);
            console.log("brackets: " + [question.author])
            return {
                ...state,
				[question.author]: {
					...state[question.author],
					questions: state[question.author].questions.concat(question.id)
				}
            }
            
        case ADD_ANSWER_TO_USER:
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }

                }

            }
        default:
            return state
    }
}