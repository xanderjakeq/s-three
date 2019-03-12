import axios from 'axios'

import {ERROR} from './index'

export const PLAY = 'PLAY'

export const GET_FEATURES= 'GET_FEATURES'
export const FEATURES_RECEIVED= 'FEATURES_RECEIVED' 

export const play = (trackId) => {
    return {
        type: PLAY,
        payload: trackId
    }
}

// get from sppotify console
const spotifyToken = 'BQChAauG3Ooa4w_to1uRx0GIV5kt_MdXdhHjd8-nbQBxQRKuC9X8lh15CYu9e_3zpWVcSiLyZ8QKJHcriv8yuV5ngfb-6hfkVNHO0yyivW0KEGS8IX9bRLepyISwEZhySGcQjj-xBzMBNU4GOJyh2ibmoZviOLQ'

export const getFeatures = (trackData) => dispatch => {
    dispatch({
        type: GET_FEATURES,
        payload: trackData
    })
    axios.get(`https://api.spotify.com/v1/audio-features/${trackData.id}`, {
        headers: {
            Authorization: `Bearer ${spotifyToken}`
        }
    }).then(res => {
        dispatch({
            type: FEATURES_RECEIVED,
            payload: res.data  
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error
        })
    })
}