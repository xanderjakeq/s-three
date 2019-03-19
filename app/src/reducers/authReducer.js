import * as actions from '../actions'

import {averagePerObjectProperty as getTaste} from '../helpers'
import { componentFromStream } from 'recompose';

const initialState = {
  authenticating: false,
  userData: {},
  userMusicTaste: null,
  isAuthed: localStorage.getItem('authToken') ? true : false, //check if client is already authenticated
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case actions.AUTH_START:
      return {
        ...state,
        authenticating: true,
        error: null
      }
    case actions.AUTH_SUCCESS:
      localStorage.setItem('authToken', action.payload)
      return {
        ...state,
        authenticating: false,
        isAuthed: true
      }
    case actions.USER_DATA_RECEIVED:
      let taste = action.payload.likedTracks ? getTaste(action.payload.likedTracks) : []
      return {
        ...state,
        userData: action.payload,
        userMusicTaste:  taste
      }
    case actions.LOGOUT: 
      return {
          ...state,
          isAuthed: false
      }
    case actions.ERROR:
      return {
        ...state,
        authenticating: false,
        error: action.payload       
      }
    default:
      return state
  }
}

