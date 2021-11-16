import { SONG_SELECTED } from "../actions/types"

export const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
        case SONG_SELECTED:
            return action.payload;
        default:
            return selectedSong;
    }
}