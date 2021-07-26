import React, {Component} from 'react'
import {connect} from 'react-redux'
class Questions extends Component {
    render() {
        const {questions} = this.props
        const keys = Object.keys(questions)
        return (
            <div>
                <ul>
                {keys.map( (key) => (
                <li key={key}>
                  {questions[key].name}
                  {questions[key].optionOne.text}
                  {questions[key].optionTwo.text}
                </li>

            ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questions
    }
}

export default connect(mapStateToProps)(Questions)