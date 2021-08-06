import React,{Fragment} from 'react'
import QuestionList from './QuestionList'
import {connect} from 'react-redux'

class Dashboard extends React.Component {

    // we need to grab questionID from questions
    getUnAnsweredQuestions = (id) => {    
        let allQuestionIDs = Object.keys(this.props.questions)    
        let answered = this.getAnsweredQuestions(id)
        let remaining = allQuestionIDs.filter((x) => !answered.includes(x))

        return remaining
    }

    // we need to grab question IDs from users[authedUser].answers
    getAnsweredQuestions = (id) => {
        let answered = Object.keys(this.props.users[this.props.authedUser].answers)
        return answered;
    }

    render() {
        const {id} = this.props.authedUser;
        return(
            <Fragment>
            <h2>Dashboard: I am home. the landing page if the user is logged in.</h2>
            <h3>Unanswered Questions</h3>
            <QuestionList answered={false} questionIDs={this.getUnAnsweredQuestions(id)}/>
            <h3>Answered Questions</h3>
            <QuestionList answered={true} questionIDs={this.getAnsweredQuestions(id)}/>
            </Fragment>

        )
    }
}

function mapStateToProps({questions,authedUser,users}) {
    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        authedUser,
        users,
        questions   
    }
}
export default connect(mapStateToProps)(Dashboard)