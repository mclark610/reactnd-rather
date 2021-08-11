import React from 'react'
import { withRouter } from 'react-router-dom'
import AnswerQuestion from './AnswerQuestion'
import ReviewQuestion from './ReviewQuestion'

/**
* @description This is a route type function that sends the question request to 
*              the right component based on data sent from QuestionItem
* @constructor
* @param {object} questionID   - question selected for review
* @param {boolean}answeredType - whether the question was answered (false) or not.
*/

const RouteQuestionType = (props) => {
  const questionID = props.match.params.id

  if (props.location.state.answeredType === false) {
    return (
      <AnswerQuestion id={questionID} />
    )
  }
  else
    return (
      <ReviewQuestion id={questionID} />
    )
}

export default withRouter(RouteQuestionType)
