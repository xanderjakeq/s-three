import * as actions from '../actions'

import {averagePerObjectProperty as getTaste} from '../helpers'

const initialState = {
  authenticating: false,
  userData: {},
  userMusicTaste: null,
  isAuthed:  false, 
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
      let taste = action.payload.likedTracks ? getTaste(Object.values(action.payload.likedTracks)) : []
      return {
        ...state,
        userData: action.payload,
        userMusicTaste:  taste
      }
    case actions.FIREBASE_USER_DATA_RECEIVED:
      return {
        ...state,
        user: action.payload
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