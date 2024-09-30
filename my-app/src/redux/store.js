import {configureStore} from '@reduxjs/toolkit';
import { facultiesSearchTermReducer } from './slices/facultiesSearchTermSlice';
import { facultiesReducer } from './slices/facultiesSlice';
import { tutorsReducer } from './slices/tutorsSlice';
import { citiesReducer } from './slices/citiesSlice';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// In store, pentru fiecare "particica" din state-ul aplicatiei, o sa asignam un reducer care se va ocupa exclusiv
// de logica pentru acea particica
/**
 * OBIECTUL DE STATE VA FI:
 * {
 * cities: [...lista de orase],
 * faculties: [...lista de facultati],
 * facultiesSearchTerm: "",
 * tutors: [...lista de tutori]
 * }
 */

const persistConfig = {
    key: 'root',
    storage
}

const persistedCities = persistReducer(persistConfig, citiesReducer)
const persistedFaculties = persistReducer(persistConfig, facultiesReducer)
const persistedFacultiesSearchTerm = persistReducer(persistConfig, facultiesSearchTermReducer)
const persistedTutors = persistReducer(persistConfig, tutorsReducer)

const store = configureStore({
    reducer: {
        cities: persistedCities,
        faculties: persistedFaculties,
        facultiesSearchTerm: persistedFacultiesSearchTerm,
        tutors: persistedTutors
    }
})

const persistor = persistStore(store);

export default persistor;

