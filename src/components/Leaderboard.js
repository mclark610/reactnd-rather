import React from 'react'
import { connect } from 'react-redux'

import { Container, Box, Grid, Avatar, Typography } from '@material-ui/core'

/**
* @description Leaderboard is the reports page of the application
* @constructor
* @param {array} userIDs     - User IDs sorted to display most active player
* @param {object} authedUser - The authorized userID that may answer the question
* @param {array} users       - array of all users in the game
*/

class Leaderboard extends React.Component {

  render() {
    const { users, userIDs } = this.props
    return (
      <Container >
        <Typography>Leaderboard</Typography>
        <Box border={1} alignContent="center">
          <Grid container direction="row" spacing={0} style={{ width: "70%" }} >
            <Grid item xs={4}>
              Name
            </Grid>
            <Grid item xs={2}>
              <Typography>#Questions</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Answered</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Total</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={0} style={{ width: "70%" }}>
            {userIDs.map((id) => (
              <React.Fragment>

                <Grid item xs={1}>
                  <Avatar alt={users[id].name} src={users[id].avatarURL} />
                </Grid>

                <Grid item xs={2}>
                  <Typography >{users[id].name}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{users[id].questions.length}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{Object.keys(users[id].answers).length}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{Object.keys(users[id].answers).length + users[id].questions.length}</Typography>
                </Grid>
              </React.Fragment>

            ))}
          </Grid>
        </Box>
      </Container>
    )
  }
}


function mapStateToProps({ authedUser, users }) {
  return {
    userIDs: Object.keys(users)
      .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length) - ((Object.keys(users[a].answers).length + (users[a].questions).length)))),
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)
