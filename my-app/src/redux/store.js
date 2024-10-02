import { configureStore } from "@reduxjs/toolkit";
import { facultiesSearchTermReducer } from "./slices/facultiesSearchTermSlice";
import { facultiesReducer } from "./slices/facultiesSlice";
import { tutorsReducer } from "./slices/tutorsSlice";
import { citiesReducer } from "./slices/citiesSlice";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    faculties: facultiesReducer,
    facultiesSearchTerm: facultiesSearchTermReducer,
    tutors: tutorsReducer,
  },
});

export const persistor = persistStore(store);
