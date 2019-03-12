
import {combineReducers} from 'redux'

import auth from './authReducer'
import track from './trackReducer'


export const rootReducer = combineReducers({
  auth,
  track
})