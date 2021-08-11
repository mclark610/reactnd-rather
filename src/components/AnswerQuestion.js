import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {handleAddAnswer} from '../actions/questions'

import {Button} from '@material-ui/core'
import {FormControl,FormControlLabel,RadioGroup,Radio} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {Grid,Avatar} from '@material-ui/core'

class AnswerQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            option: "optionOne",
            optionOneText: "",
            optionTwoText: ""
        }
    }

    componentDidMount() {
        const question = this.props.question
        console.log("optionOne: " + question.optionOne.text)
        console.log("optionTwo: " + question.optionTwo.text)
        this.setState({
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text
        })
    }
    handleOnSubmit = (e) => {
        const {dispatch} = this.props
        e.preventDefault(e)
        // questions. option[One|Two].votes.concat(authUser)
        // users.answers.option[One|Two].votes.concat(authUser)
        dispatch(handleAddAnswer(this.props.authedUser,this.props.question.id,this.state.option))
        this.props.history.push('/')
    }

    handleOptionChange = (e) => {
        console.log("e.target.value: " + e.target.value)
        console.log("e.target.name: " + e.target.name)
        console.log("e.target.id: " + e.target.id)
        this.setState({"option": e.target.value})

    }
    render() {
        

        const {question} = this.props
        console.log("AnswerQuestion::question: " + JSON.stringify(question))
        console.log("AnswerQuestion::answered: " + JSON.stringify(this.props.location.state.answeredType))

        return (
            <div>
            <Grid container direction="row" justifyContent="center" spacing={0} alignItems="flex-start" >
                  <Grid item xs={1}>
                    <Avatar alt={this.props.authedUser} src={this.props.user.avatarURL} />
                  </Grid>
                    <Typography variant="h4">Would you rather ... </Typography>
            </Grid>
            
            <FormControl component="fieldset">
                    <RadioGroup aria-label="options" name="options" value={this.state.option} onChange={this.handleOptionChange}>
                        <FormControlLabel value="optionOne" control={<Radio />} checked={this.state.option === "optionOne"} label={this.state.optionOneText}/>
                                               -- OR -- 
                        <FormControlLabel value="optionTwo" control={<Radio />} checked={this.state.option === "optionTwo"}  label={this.state.optionTwoText}/>
                    </RadioGroup>
            </FormControl>
<br/>
<Grid container direction="row" justifyContent="center" spacing={0} alignItems="flex-start" >
    <Grid item xs={2}>
            <Button variant="contained" color="primary" type="submit" onClick={this.handleOnSubmit}>
                Continue
            </Button>
    </Grid>
    <Grid item xs={2}>
            <Button variant="contained" color="primary" onClick={() => this.props.history.push('/')}>
                Cancel
            </Button>
    </Grid>            
</Grid>
            </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users},ownProps) {
    const questionID = ownProps.match.params.id
    const question = questions[questionID]
    const user = users[authedUser]
    console.log("ownProps: " + JSON.stringify(ownProps.match.params.id))
    
    console.log("authedUser: " + JSON.stringify(authedUser))
    console.log("mapState:questions: " + question)
    return {
        authedUser,
        question,
        user,
        answered: ownProps.match.params.answered
    }
}
export default withRouter(connect(mapStateToProps)(AnswerQuestion))
