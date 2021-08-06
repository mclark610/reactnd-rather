import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {handleAddAnswer} from '../actions/questions'

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
    }

    handleOptionChange = (e) => {
        console.log("e.target.value: " + e.target.value)
        console.log("e.target.name: " + e.target.name)
        console.log("e.target.id: " + e.target.id)
        this.setState({"option": e.target.value})

    }
    render() {
        const {question} = this.props
        console.log("question: " + JSON.stringify(question))
        return (
            <div>
            <h2>Answer Question</h2>
            <h3>Would you rather?</h3>
            <form action="#">
            <fieldset>
                <input type="radio" id="optionOne" name="options" value="optionOne" checked={this.state.option === "optionOne"} onChange={this.handleOptionChange}/>{this.state.optionOneText}
                <h4>--- OR ---</h4>
                <input type="radio" id="optionTwo" name="options" value="optionTwo" checked={this.state.option === "optionTwo"} onChange={this.handleOptionChange}/>{this.state.optionTwoText}
                <br/>
            </fieldset>
            <button type="submit" onClick={this.handleOnSubmit}>Continue</button>
            <button onClick={this.handleCancel}>Cancel</button>
            </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser,questions},ownProps) {
    const questionID = ownProps.match.params.id
    const question = questions[questionID]
    
    console.log("ownProps: " + JSON.stringify(ownProps.match.params.id))
    
    console.log("authedUser: " + JSON.stringify(authedUser))
    console.log("mapState:questions: " + question)
    return {
        authedUser,
        question
    }
}
export default withRouter(connect(mapStateToProps)(AnswerQuestion))
