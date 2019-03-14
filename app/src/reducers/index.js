import {combineReducers} from 'redux'

import auth from './authReducer'
import track from './trackReducer'
import thumbReducer from './thumbReducer'


export const rootReducer = combineReducers({
  auth,
  track,
  thumbs: thumbReducer,
})

