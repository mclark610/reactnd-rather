import React from 'react'
import {withRouter} from 'react-router-dom'
import AnswerQuestion from './AnswerQuestion'
import ReviewQuestion from './ReviewQuestion'
const RouteQuestionType = (props) => {
    console.log("props: " + JSON.stringify(props))
    console.log("answerType: " + props.location.state.answeredType)
    console.log("questionID: " + props.match.params.id)
    const questionID = props.match.params.id
    
    if ( props.location.state.answeredType === false ) {
        return(
            <AnswerQuestion id={questionID}/>
        )
    }
    else
        return (
            <ReviewQuestion id={questionID} />
        )
}

export default withRouter(RouteQuestionType)
