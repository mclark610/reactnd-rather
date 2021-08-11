import React from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'
import { Grid, List } from '@material-ui/core'

/**
* @description QuestionList contains the questions that may either be answered or unanswered
* @constructor
* @param {array}  questionIDs- array of question indexes
* @param {array}  questions  - array of all questions
* @param {object} answered   - answered - true/false to say if question was answered or not.
*/

class QuestionList extends React.Component {
  render() {
    return (
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <List id="questionList" name="questionList" >
          {this.props.questionIDs.map((key) => (
            <li key={key}>
              <QuestionItem id={key} answered={this.props.answered} />
            </li>
          ))}
        </List>
      </Grid>
    )
  }
}

function mapStateToProps({ questions }, { answered, questionIDs }) {
  return {
    questionIDs,
    answered,
    questions
  }
}

export default connect(mapStateToProps)(QuestionList)