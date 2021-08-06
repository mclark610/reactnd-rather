import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {handleAddQuestion} from '../actions/questions'

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
        const {dispatch} = this.props;
        console.log("one: " + this.state.optionOne);
        console.log("two: " + this.state.optionTwo);

        dispatch(handleAddQuestion(this.state.optionOne,this.state.optionTwo));

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
                <h2>I am a New Question.</h2>
                <h2>Would You Rather</h2>
                <form action="#" onSubmit={this.onSubmit} >
                    <label htmlFor="optionOne">Option One</label>
                    <input type="text" name="optionOne" id="optionOne" onChange={this.handleChange}/>
                    <br/>
                    <h2>--- OR --- </h2>
                    <label htmlFor="optionTwo">Option Two</label>
                    <input type="text" name="optionTwo" id="optionTwo" onChange={this.handleChange}/>
                    <br/>
                    <button type="submit" >Continue</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>

            </div>
        )
    }
}

function mapStateToProps({users,questions,authedUser}) {
    return {
        users,
        questions,
        authedUser
    }
}
export default withRouter(connect(mapStateToProps)(NewQuestion))