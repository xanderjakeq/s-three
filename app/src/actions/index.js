import axios from 'axios'


export const ERROR = 'ERROR'

const baseUrl = 'http://localhost:3333'

export * from './authActions'
export * from './trackActions'

export const actionCreatorTHunk = () => dispatch => {
  // use dispatch to evoke an action
}

// export const normalActionCreator = () => {
//   return{
//     type: type,
//     payload: payload
//   }
// }
