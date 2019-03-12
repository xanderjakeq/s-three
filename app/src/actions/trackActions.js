
import {ERROR} from './index'

export const PLAY = 'PLAY'

export const play = (trackId) => {
    return {
        type: PLAY,
        payload: trackId
    }
}