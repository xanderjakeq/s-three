import axios from 'axios';

import { ERROR } from './index';
import firebase from '../firebaseApp'

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';

export const FIREBASE_USER_DATA_RECEIVED = 'FIREBASE_USER_DATA_RECEIVED'

export const authenticate = (email, password) => dispatch => {
  dispatch({
    type: AUTH_START
  });
  firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
    console.log(res)
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.uid
    });
  }).catch(err => {

  })
};

export const signup = (email, password) => dispatch => {
  dispatch({
    type: AUTH_START
  });

  firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
    console.log(res)
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data
    });
  }).catch(err => {
    dispatch({
      type: ERROR,
      payload: err
    });
  })
};

export const getUserData = (user) => dispatch => {
  // this code block will listen to changes in the firebase database. the callback will run if something changes eg: adding deleting data
  firebase.database().ref('users').child('userId').on('value', snap => {
    console.log(snap.val())
    let data = {
        likedTracks: [],
        dislikedTracks: []
    }
    if(snap.val()){
      data.likedTracks = snap.val().likedTracks ? Object.keys(snap.val().likedTracks).map(key => snap.val().likedTracks[key]) : []
      data.dislikedTracks = snap.val().dislikedTracks ? Object.keys(snap.val().dislikedTracks).map(key => snap.val().dislikedTracks[key]) : []
      console.log(data)
      dispatch({
        type: USER_DATA_RECEIVED,
        payload: data,
      });
    }else{
      dispatch({
        type: USER_DATA_RECEIVED,
        payload: data
      })
    }
  })
};

export const saveFirebaseUser = (user) => {
  return {
    type: FIREBASE_USER_DATA_RECEIVED,
    payload: user
  }
}

export const logout = () => {
  firebase.auth().signOut()
  return {
    type: LOGOUT
  };
};

