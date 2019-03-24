import firebase from '../firebaseApp'

const database = firebase.database()

export const LIKING = 'LIKING'

export const DISLIKING = 'DISLIKING'
/**
 * 
 * state can be one of three: liked, indifferent, disliked
 */
export const like = (trackId, reactionState, userId) => dispatch => { 
  /* check for state
    if its liked,
      remove from liked list
    if disliked
      remove from disliked list
      then add to liked list
    if indifferent (no state)
      add to liked list
  */
    console.log(reactionState)
  switch(reactionState){
    case 'liked':
      removeTrack(trackId, 'likedTracks')
      break
    case 'disliked':
      removeTrack(trackId, 'dislikedTracks')
      addTrack(trackId, 'likedTracks')
      break
    default: 
      addTrack(trackId, 'likedTracks')
  }
  dispatch({
    type: LIKING,
    payload: reactionState
  })
}

export const disLike = (trackId, reactionState, userId) => dispatch => { 
  /* check for state
    if its disliked,
      remove from disliked list
    if liked
      remove from liked list
      then add to disliked list
    if indifferent (no state)
      add to disliked list
  */
  switch(reactionState){
    case 'disliked':
      removeTrack(trackId, 'dislikedTracks')
      break
    case 'liked':
      removeTrack(trackId, 'likedTracks')
      addTrack(trackId, 'dislikedTracks')
      break
    default: 
      addTrack(trackId, 'dislikedTracks')
  }
  dispatch({
    type: DISLIKING,
    payload: reactionState
  })
}

const addTrack = (trackId, userDataLocation) => {
  database.ref('users').child(`userId/${userDataLocation}`).push(trackId).then(res => {
    console.log(res)
  })
}

const removeTrack = (trackId, userDataLocation) => {
  database.ref('users').child(`userId/${userDataLocation}`).orderByValue().equalTo(trackId).once('value', (snap) => {
    if(snap.val()){
      Object.keys(snap.val()).map(key => database.ref('users').child(`userId/${userDataLocation}`).child(key).remove())
    }else{
      console.log('not found')
    }
  })
}