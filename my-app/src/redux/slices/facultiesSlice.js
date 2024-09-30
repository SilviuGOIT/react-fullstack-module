import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'Faculty of Math',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        name: 'Faculty of Physics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

const facultiesSlice = createSlice({
    name: 'faculties',
    initialState: initialState,
    reducers: {
        addFaculty: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (item) => {
                return {
                    payload: {
                        id: nanoid(),
                        ...item,
                    }
                }
            }
        },
        editFaculty(state, action) {
            return state.map((item) => {
                if (item.id !== action.payload.id) {
                    // This isn't the item we care about - keep it as-is
                    return item
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...item,
                    ...action.payload
                }
            })
        },
        deleteFaculty(state, action) {
            return state.filter((el) => el.id !== action.payload)
        }
    }
});

// Exportam generatoarele de actiuni si reducerul

export const { addFaculty, editFaculty, deleteFaculty } = facultiesSlice.actions;
export const facultiesReducer = facultiesSlice.reducer;