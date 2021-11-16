import { SONG_SELECTED } from './types';

// Action Creator
export const selectSong = (data) => {
    // Return an Action
    return {
        type: SONG_SELECTED, 
        payload: data.song
    }
}