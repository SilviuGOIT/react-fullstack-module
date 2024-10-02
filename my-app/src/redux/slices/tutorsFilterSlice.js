import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

const tutorsFilterSlice = createSlice({
    name: 'tutors',
    initialState: initialState,
    reducers: {
        setFilter: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setFilter } = tutorsFilterSlice.actions;
export const tutorsFilterReducer = tutorsFilterSlice.reducer;
