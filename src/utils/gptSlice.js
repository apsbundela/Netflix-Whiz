import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isGptSearch: false,
        gptMovieNames: [],
        gptMovieResults: null
    },
    reducers: {
        setGptToggle: (state) => {
            state.isGptSearch = !state.isGptSearch;
        },
        addGptMoviesResult: (state, action) => {
            const { names, movieResults } = action.payload;
            state.gptMovieNames = names;
            state.gptMovieResults = movieResults;
        }
    }
})

export const { setGptToggle, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;