/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios'

export const GET_SMURF = 'GET_SMURF'
export const ADD_SMURF = 'ADD_SMURF'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'
export const FETCHING = 'FETCHING'
export const ERROR = 'ERROR'

const baseUrl = 'http://localhost:3333'

export const getSmurfs = () => dispatch => {
  dispatch({
    type: FETCHING
  })
  axios.get(`${baseUrl}/smurfs`).then(res => {
    dispatch({
      type: GET_SMURF,
      payload: res.data
    })
  }).catch(err => {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}

export const addSmurf = (data) => dispatch => {
  dispatch({
    type: ADD_SMURF
  })
  return axios.post(`${baseUrl}/smurfs`, data).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}

export const updateSmurf = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_SMURF
  })
  return axios.put(`${baseUrl}/smurfs/${id}`,data).then(res => {
    console.log(res)
 }).catch(err => {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}

export const deleteSmurf = id => dispatch => {
  dispatch({
    type: DELETE_SMURF
  })
  return axios.delete(`${baseUrl}/smurfs/${id}`).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}