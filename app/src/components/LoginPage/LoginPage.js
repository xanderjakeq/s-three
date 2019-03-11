import React from 'react'

export default class extends React.Component {
    render(){
        return (
            <form onChange = {}>
                <input type='text' name='email' placeholder = 'email'/>
                <input type='text' name='password' placeholder = 'password'/>
                <input type='submit' value='signup'/>
                <input type='submit' value='login'/>
            </form>
        )
    }
}