import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

import { Box, Grid, Avatar, Typography, Button, TextField } from '@material-ui/core'

class NewQuestion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      optionOne: '',
      optionTwo: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    //Save data.
    const { dispatch } = this.props;
    console.log("one: " + this.state.optionOne);
    console.log("two: " + this.state.optionTwo);

    dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo));

    //Clear data.
    this.setState({
      optionOne: '',
      optionTwo: ''
    })

    this.props.history.push('/')

  }

  handleCancel = (e) => {
    this.props.history.push('/')
  }

  handleChange = (e) => {
    console.log("e.target.name: " + e.target.name)
    console.log("e.target.value: " + e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Grid container direction="row" justifyContent="center" spacing={0} alignItems="flex-start" >
          <Grid item xs={1}>
            <Avatar alt={this.props.authedUser} src={this.props.users[this.props.authedUser].avatarURL} />
          </Grid>
          <Typography variant="h4">Would you rather ... </Typography>
        </Grid>
        <form action="#" onSubmit={this.onSubmit} >
          <Box component="span" m={3}>
            <TextField style={{ width: "60%", margin: "10px" }} id="optionOne" name="optionOne" label="Option One" variant="outlined" size="small" onChange={this.handleChange} required />
          </Box>
          <Typography>---OR---</Typography>
          <Box component="span" m={3}>
            <TextField style={{ width: "60%", margin: "10px" }} minLength={1} id="optionTwo" name="optionTwo" label="Option Two" variant="outlined" size="small" onChange={this.handleChange} required />
          </Box>

          <Box component="p" style={{ width: "100%" }} m={3}>

            <Button style={{ margin: "10px" }} variant="contained" color="primary" type="submit" onClick={this.handleOnSubmit}>
              Continue
            </Button>

            <Button variant="contained" color="primary" onClick={() => this.props.history.push('/')}>
              Cancel
            </Button>
          </Box>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  }
}
export default withRouter(connect(mapStateToProps)(NewQuestion))