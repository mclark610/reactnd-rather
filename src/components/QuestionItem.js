import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
* @description QuestionItem is a ListItem in a list of questions. If selected, the
*              user gets routed to an object that determines the type of question
*              - answered or unanswered, and takes them to the appropriate object.  
* @constructor
* @param {object} authedUser - The authorized userID that may answer the question
* @param {array}  questions  - array of all questions
* @param {object} question   - question selected for review
* @param {object} answered   - answered - true/false to say if question was answered or not.
*/

class QuestionItem extends React.Component {

  onClicked = (e) => {
    const { question, answered } = this.props
    this.props.history.push({
      pathname: `/questions/${question.id}`,
      state: {
        answeredType: answered
      }
    })
  }

  render() {
    const { id, optionOne, optionTwo } = this.props.question
    console.log("QuestionItem: answered: " + this.props.answered)
    return (
      <div>
        <ListItem button onDoubleClick={this.onClicked} key={id}>
          <ListItemText>
            Would you rather {optionOne.text}<br /> or<br />
            {optionTwo.text}
          </ListItemText>
        </ListItem>
      </div>
    )
  }
}


function mapStateToProps({ authedUser, questions }, { id, answered }) {
  const question = questions[id]

  return {
    authedUser,
    question: question,
    answered,
    questions
  }
}
export default withRouter(connect(mapStateToProps)(QuestionItem))
