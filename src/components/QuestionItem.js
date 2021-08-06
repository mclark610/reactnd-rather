import React from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'

class QuestionItem extends React.Component {
    render() {
//        const {question} = this.props
        const {id,author,timestamp,optionOne,optionTwo} = this.props.question
        console.log("question: " + JSON.stringify(this.props.question))
        return (
            <div>
            <h2>Question Item</h2>
                <Link  to={`/questions/${id}`} >
                    {id}
                    {author}
                    {timestamp}
                    {optionOne.text}
                    {optionTwo.text}
                </Link>
            </div>
        )
    }
}


function mapStateToProps({authedUser,questions},{id}) {
    const question = questions[id]
//    console.log("mapStateToProps: these questions: " + JSON.stringify(question))   

    return {
        authedUser,
        question: question
    }
}
export default withRouter(connect(mapStateToProps)(QuestionItem))
