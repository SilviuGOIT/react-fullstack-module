import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const facultiesSearchTermSlice = createSlice({
    name: 'facultiesSearchTerm',
    initialState: initialState,
    reducers: {
        setSearchTerm(state, action) {
            return action.payload
        }
    }
})

export const {setSearchTerm} = facultiesSearchTermSlice.actions;
export const facultiesSearchTermReducer = facultiesSearchTermSlice.reducer;