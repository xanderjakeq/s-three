import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'



import {Nav, OptionsContainer} from './StyledComps'

class NavBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            isExpanded: false
        }
    }
    render(){
        return(
            <Nav>
                <NavLink to = '/' ><img src="" alt="Logo"/></NavLink>
                <div>
                    <NavLink to ='/profile'><h2>Profile</h2></NavLink>
                </div>
            </Nav>
        )
    }
}

export default (NavBar)