import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionItem from './QuestionItem'

class QuestionList extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.questionIDs.map( (key) => (
                    <li key={key}>
                        <QuestionItem id={key} />
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions},{answered,questionIDs}) {
    return {
        questionIDs,
        answered,
        questions
    }
}

export default connect(mapStateToProps)(QuestionList)