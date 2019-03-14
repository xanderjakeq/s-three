import React, {Component} from 'react'
import RadarChart from './RadarChart'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../actions'


class ProfilePage extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    handleLogOut = () => {
        this.props.history.push('/')
        this.props.logout()
    }
    render(){
        return(
            <>
                <RadarChart/>
                <h1>You</h1>
                <button onClick = {this.handleLogOut}>Signout</button>
            </>
        )
    }
}

export default withRouter(connect(null, {logout})(ProfilePage))