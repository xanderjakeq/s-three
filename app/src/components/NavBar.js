import React, {Component} from 'react'
import {User} from 'react-feather'
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
                <NavLink to ='/profile'><User color = 'black' size = {30}/></NavLink>
            </Nav>
        )
    }
}

export default (NavBar)