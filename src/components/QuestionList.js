import React from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'
import { Grid, List } from '@material-ui/core'

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