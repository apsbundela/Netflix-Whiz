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
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTailerVideos: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTailerVideos, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;