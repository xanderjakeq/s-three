import React, {Component} from 'react'
import styled from 'styled-components'
import {User} from 'react-feather'
import {NavLink} from 'react-router-dom'



const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    padding: 0 10px;
    height: 50px;
    background: white;
    border-bottom: 1px solid #191414;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    a{
        height: 30px;
    }
`

const NavBar = (props) => {
        return(
            <Nav>
                <NavLink to = '/' ><img src="" alt="Logo"/></NavLink>
                <NavLink to ='/profile'><User color = 'black' size = {30}/></NavLink>
            </Nav>
        )
    }

export default NavBar
