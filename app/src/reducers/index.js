/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {combineReducers} from 'redux'
import * as actions from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case actions.FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case actions.GET_SMURF:
      return{
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload
      }
    case actions.ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      }
    case actions.UPDATE_SMURF:
      return {
        ...state,
        updatingSmurf: true
      }
    case actions.DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true
      }
    case actions.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload       
      }
    default:
      return state
  }
}