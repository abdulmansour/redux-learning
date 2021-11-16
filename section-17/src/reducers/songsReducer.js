
// inital list of songs, could be fetched from an api or a db
const s = [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it That Way", duration: "1:45" }
]

export const songsReducer = (songs = s, action) => {
    return songs;
}