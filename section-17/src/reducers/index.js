import { selectedSongReducer } from "./selectedSongReducer";
import { songsReducer } from "./songsReducer";
import { combineReducers } from "redux";

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
