import firebase from '../firebaseApp'

export const LIKING = 'LIKING'
export const DISLIKING = 'DISLIKING'

const database = firebase.database()
/**
 * state can be one of three: liked, indifferent, disliked
 */
export const like = (trackData, reactionState, userId) => dispatch => { 
    console.log(reactionState, 'LOOK AT ME')
  switch(reactionState){
    case 'liked':
      removeTrack(trackData, 'likedTracks')
      break
    case 'disliked':
      removeTrack(trackData, 'dislikedTracks')
      addTrack(trackData, 'likedTracks')
      break
    default: 
      addTrack(trackData, 'likedTracks')
  }
  dispatch({
    type: LIKING,
    payload: reactionState
  })
}

export const disLike = (trackData, reactionState, userId) => dispatch => { 
  switch(reactionState){
    case 'disliked':
      removeTrack(trackData, 'dislikedTracks')
      break
    case 'liked':
      removeTrack(trackData, 'likedTracks')
      addTrack(trackData, 'dislikedTracks')
      break
    default: 
      addTrack(trackData, 'dislikedTracks')
  }
  dispatch({
    type: DISLIKING,
    payload: reactionState
  })
}

// Helpers
const addTrack = (trackData, userDataLocation) => {
  database.ref('users').child(`userId/${userDataLocation}`).push(trackData).then(res => {
    console.log(res)
  })
}

const removeTrack = (trackData, userDataLocation) => {
  // database.ref('users').child(`userId/${userDataLocation}`).orderByValue().equalTo(trackData).once('value', (snap) => {
  database.ref('users').child(`userId/${userDataLocation}`).orderByValue().once('value', (snap) => {
    console.log(snap.val())
    if(snap.val()){
      Object.keys(snap.val()).map(key => {
        if(snap.val()[key].id === trackData.id){
          database.ref('users').child(`userId/${userDataLocation}`).child(key).remove()
        }
      })
    }else{
      console.log('not found')
    }
  })
}