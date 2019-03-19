import React, {Component}from 'react'
import {connect} from 'react-redux'

import {authenticate, signup} from '../../actions'

import {AuthButton, LoginForm} from '../StyledComps'

import LoadingScreen from '../minorComps/LoadingScreen'

import Logo from '../minorComps/Logo'


class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            login: true
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearUsernamePassword = () => {
        this.setState({
            email: '',
            password: '',
            login: true
        })
    }

    handleButtonClick = e => {
        if(e.target.name === 'login'){
            this.props.authenticate(this.state.email, this.state.password)
        }else{
            this.props.signup(this.state.email, this.state.password)
        }
        this.clearUsernamePassword()   
    }
    handleSwitch = e => {
        this.setState({
            login: !this.state.login
        })
    }
    render(){
        return(
            <>
            <LoginForm onSubmit = {e => e.preventDefault()}>
                <Logo/>
                <input name = 'email' type='text' value = {this.state.email} placeholder = 'email' onChange = {this.onChange}/>
                <input name = 'password' type='password' value = {this.state.password} placeholder = 'password' onChange = {this.onChange}/>
                {this.state.login ? 
                    <AuthButton name = 'login' type = 'submit' value = 'login' onClick = {this.handleButtonClick}/>:
                    <AuthButton name = 'signup' type = 'submit' value = 'signup' onClick = {this.handleButtonClick}/> 
                }
                <p onClick = {this.handleSwitch} style = {{cursor: 'pointer'}}>{this.state.login ? 'SignUp' : 'Login'}</p>
            </LoginForm>
            {this.props.authenticating && <LoadingScreen/>}
            </>
        )
    }
}

const mstp = state => {
    return {
        authenticating: state.auth.authenticating
    }
}

export default connect(mstp, {authenticate, signup})(LoginPage)
