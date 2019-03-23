import firebase from '../firebaseApp'

const database = firebase.database()

export const LIKING = 'LIKING'

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
      console.log('liked Run')
      database.ref('users').child('userId/likedTracks').orderByValue().equalTo(trackId).once('value', (snap) => {
        if(snap.val()){
          Object.keys(snap.val()).map(key => database.ref('users').child('userId/likedTracks').child(key).remove())
        }else{
          console.log('not liked yet')
        }
      })
      break
    case 'disliked':
      console.log(database.ref('users').child('userId/dislikedTracks').orderByValue().equalTo(trackId))
      break
    default: 
      database.ref('users').child('userId/likedTracks').push(trackId).then(res => {
        console.log(res)
      })
  }
  dispatch({
    type: LIKING,
    payload: reactionState
  })
}

export const disLike = (trackId, state) => { 
  /* check for state
    if its disliked,
      remove from disliked list
    if liked
      remove from liked list
      then add to disliked list
    if indifferent (no state)
      add to disliked list
  */
}