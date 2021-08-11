import React from 'react'
import QuestionList from './QuestionList'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Tab, Tabs } from '@material-ui/core'

import Box from '@material-ui/core/Box';

//TODO: pad top to get away from main menu

/**
* @description This is the users home page.  
* @constructor
* @param {array}  questionIds- array of questions sorted by timestamp
* @param {object} authedUser - The authorized userID that may answer the question
* @param {array} questions   - array of questions
* @param {array} users       - array of users
  
*/
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}
function updateTabID(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      tabName: 0
    }
  }

  handleChange = (e, newValue) => {
    this.setState({ tabName: newValue })
  }

  // we need to grab questionID from questions
  getUnAnsweredQuestions = (id) => {
    const allQuestionIDs = this.props.questionIds //Object.keys(this.props.questions)    
    const answered = this.getAnsweredQuestions()
    const remaining = allQuestionIDs.filter((x) => !answered.includes(x))

    return remaining
  }

  // we need to grab question IDs from users[authedUser].answers
  getAnsweredQuestions = () => {
    return Object.keys(this.props.users[this.props.authedUser].answers)
  }

  render() {
    <div>dashboard</div>
    if (!this.props.authedUser) {
      return (null)
    }

    const { id } = this.props.authedUser

    return (
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Typography>Questions</Typography>
        <Paper square>
          <Tabs
            value={this.state.tabName}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Unanswered" {...updateTabID(0)} />
            <Tab label="Answered" {...updateTabID(1)} />
          </Tabs>
          <TabPanel key={0} label='Unanswered' value={this.state.tabName} index={0}>
            <QuestionList answered={false} questionIDs={this.getUnAnsweredQuestions(id)} />
          </TabPanel>
          <TabPanel value={this.state.tabName} index={1}>
            <QuestionList answered={true} questionIDs={this.getAnsweredQuestions(id)} />
          </TabPanel>

        </Paper>
        <Typography color="primary">Please double-click question you wish to review</Typography>
      </Grid>

    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser,
    users,
    questions
  }
}
export default connect(mapStateToProps)(Dashboard)