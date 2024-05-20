import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: null,
        trailerVideo: null
    },
    reducers: {

        addNowPlayingMovies: (state, action) => {
            state.movies = action.payload;
        },
        addTailerVideos: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTailerVideos } = movieSlice.actions;
export default movieSlice.reducer;