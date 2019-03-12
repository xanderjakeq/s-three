import * as actions from '../actions'

const initialState = {
    currentTrack: '',
    expandedTrack:null, 
    expandedTrackAudioFeatures: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case actions.PLAY:
            return {
                ...state,
                currentTrack: action.payload
            }
        case actions.GET_FEATURES:
            return {
                ...state,
                expandedTrack: action.payload
            }
        case actions.FEATURES_RECEIVED:

            //    Dunno how to normalize -60 to 1.81 action.payload.loudness, 
            let featuresAsArray = [action.payload.acousticness, 
                                   action.payload.danceability, 
                                   action.payload.duration_ms/336600, 
                                   action.payload.energy, 
                                   action.payload.instrumentalness, 
                                   action.payload.key/11, 
                                   action.payload.liveness, 
                                   action.payload.speechiness, 
                                   action.payload.tempo/250, 
                                   action.payload.time_signature/5, 
                                   action.payload.valence]
                            
            let shouldBeArray = Object.keys(action.payload).filter(key => typeof action.payload[key] !== 'string').filter(key => key!== 'loudness').map(key => {

                switch(key){
                    case 'duration_ms':
                        return action.payload[key]/336600
                    case 'key':
                        return action.payload[key]/11
                    case 'tempo':
                        return action.payload[key]/250
                    case 'signature':
                        return action.payload[key]/5
                    default: 
                        return action.payload[key]
                }
            })

            return {
                ...state,
                expandedTrackAudioFeatures: action.payload
            }
        default:
            return state;
    }
}