import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isGptSearch: false
    },
    reducers: {
        setGptToggle: (state) => {
            state.isGptSearch = !state.isGptSearch;
        }
    }
})

export const { setGptToggle } = gptSlice.actions;
export default gptSlice.reducer;