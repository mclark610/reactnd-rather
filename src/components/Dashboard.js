import React,{Fragment} from 'react'
import Questions from './Questions'

class Dashboard extends React.Component {
    render() {
        return(
            <Fragment>
            <h2>Dashboard: I am home. the landing page if the user is logged in.</h2>
            <Questions />
            </Fragment>

        )
    }
}

export default Dashboard