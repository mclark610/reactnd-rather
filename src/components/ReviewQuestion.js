import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Box, Typography, Avatar } from '@material-ui/core'

/**
* @description Read only viewing of an already answered question.
* @constructor
* @param {object} authedUser - The authorized userID that may answer the question
* @param {object} question   - question selected for review
* @param {object} user       - currently logged in user
*/

class ReviewQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optionOne: "",
      optionTwo: "",
      optionOneNumVotes: 0,
      optionTwoNumVotes: 0
    }
  }

  componentDidMount() {

    const optionOneNumVotes = this.props.question.optionOne.votes.length
    const optionTwoNumVotes = this.props.question.optionTwo.votes.length

    const optionOne = this.props.question.optionOne.votes.filter((vote) => vote === this.props.authedUser).length
      ? { p: 2, border: '1px dashed blue' }
      : { p: 0, border: '' }

    const optionTwo = this.props.question.optionTwo.votes.filter((vote) => vote === this.props.authedUser).length
      ? { p: 2, border: '1px dashed blue' }
      : { p: 0, border: '' }

    this.setState({
      optionOne: optionOne,
      optionTwo: optionTwo,
      optionOneNumVotes: optionOneNumVotes,
      optionTwoNumVotes: optionTwoNumVotes,
      totalVotes: optionOneNumVotes + optionTwoNumVotes,


    })
  }

  render() {
    return (

      <div>
        <Grid container direction="row" justifyContent="center" spacing={0} alignItems="flex-start" >
          <Grid item xs={1}>
            <Avatar alt={this.props.authedUser} src={this.props.user.avatarURL} />
          </Grid>
          <Typography variant="h4">Would you rather ... </Typography>
        </Grid>

        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" >
          <Grid container item xs={6} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
            <Typography noWrap>
              Option
            </Typography>
          </Grid>
          <Grid container item xs={3} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
            <Typography noWrap>
              Number people Voted
            </Typography>
          </Grid>
          <Grid container item xs={3} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
            <Typography noWrap>
              % Voted
            </Typography>
          </Grid>
        </Grid>
        <Box id="optionOne" sx={this.state.optionOne}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" >
            <Grid container item xs={6} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
              <Typography noWrap>
                {this.props.question.optionOne.text}
              </Typography>
            </Grid>
            <Grid container item xs={3} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
              <Typography noWrap>
                {this.state.optionOneNumVotes}
              </Typography>
            </Grid>
            <Grid container item xs={3} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
              <Typography noWrap>
                {((this.state.optionOneNumVotes / this.state.totalVotes) * 100).toFixed(2)}%
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box id="optionTwo" sx={this.state.optionTwo}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" >
            <Grid container item xs={6} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
              <Typography noWrap>
                {this.props.question.optionTwo.text}
              </Typography>
            </Grid>
            <Grid container item xs={3} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
              <Typography noWrap>
                {this.state.optionTwoNumVotes}
              </Typography>
            </Grid>
            <Grid container item xs={3} spacing={1} style={{ padding: "1rem" }} zeroMinWidth>
              <Typography noWrap>
                {((this.state.optionTwoNumVotes / this.state.totalVotes) * 100).toFixed(2)}%
              </Typography>
            </Grid>
          </Grid>
        </Box>

      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, ownProps) {
  const questionID = ownProps.match.params.id
  const question = questions[questionID]
  const user = users[authedUser]

  return {
    authedUser,
    question,
    user
  }
}
export default withRouter(connect(mapStateToProps)(ReviewQuestion))
