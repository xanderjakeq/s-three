import axios from 'axios'

import {ERROR} from './index'
export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const LOGOUT = 'LOGOUT'

const baseUrl = 'https://spotify-ss-backend.herokuapp.com/api'

export const authenticate = (username, password) => dispatch => {
    dispatch({
        type: AUTH_START
    })
    axios.post(`${baseUrl}/users/login`, {
        username: username,
        password: password
    }).then(res => {
        localStorage.setItem('authToken', res.data.token)
        dispatch({
            type: AUTH_SUCCESS
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error
        })
    })
}

export const signup = (username, password) => dispatch => {
    dispatch({
        type: AUTH_START
    })
    axios.post(`${baseUrl}/users/register`, {
        username: username,
        password: password
    }).then(res => {
        localStorage.setItem('authToken', res.data.token)
        dispatch({
            type: AUTH_SUCCESS
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error
        })
    })
}

export const logout = () => {
    localStorage.removeItem('authToken')
    return {
        type: LOGOUT 
    }
}