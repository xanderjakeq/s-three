import {combineReducers} from 'redux'

import auth from './authReducer'
import track from './trackReducer'
import reactionReducer from './reactionReducer'


export const rootReducer = combineReducers({
	auth,
	track,
	reactionReducer,
})

