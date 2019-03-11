/*
  Be sure to import in all of the action types from `../actions`
*/


import {combineReducers} from 'redux'
import * as actions from '../actions'

const initialState = {

}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case actions.LOGIN_START:
      return {
        ...state,
        
      }
    default:
      return state
  }
}