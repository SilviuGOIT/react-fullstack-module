import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [{
    id: 0,
    firstName: "Stephen",
    lastName: "Smith",
    telephone: "123456",
    email: "john@smith.com",
    city: "New York",
    role: "Member"
}]

const tutorsSlice = createSlice({
    name: 'tutors',
    initialState: initialState,
    reducers: {
        addTutor: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (item) => {
                return {
                    payload: {
                        id: nanoid(),
                        role: 'Member',
                        ...item
                    }
                }
            }
        },
        editTutor(state, action) {
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
        deleteTutor(state, action) {
            return state.filter((el) => el.id !== action.payload)
        }
    }
});


// Exportam generatoarele de actiuni si reducerul
export const {addTutor, editTutor, deleteTutor} = tutorsSlice.actions;
export const tutorsReducer = tutorsSlice.reducer;