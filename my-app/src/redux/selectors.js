import { createSelector } from "@reduxjs/toolkit";

export const selectTutorsFilter = (state) => state.tutorsFilter.value;
export const selectTutors = (state) => state.tutors.items;
export const selectTutorsStatus = (state) => state.tutors.status;
export const selectTutorsError = (state) => state.tutors.error;

export const selectFilteredTutors = createSelector(
    [selectTutors, selectTutorsFilter],
    (list, searchTerm) => {
        return searchTerm.trim().length > 3
        ? list.filter( el => 
            el.firstName.toLowerCase().includes(searchTerm)
            || el.lastName.toLowerCase().includes(searchTerm))
        : list;
    }
)