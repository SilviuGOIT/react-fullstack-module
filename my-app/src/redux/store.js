import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { facultiesSearchTermReducer } from "./slices/facultiesSearchTermSlice";
import { facultiesReducer } from "./slices/facultiesSlice";
import { tutorsReducer } from "./slices/tutorsSlice";
import { citiesReducer } from "./slices/citiesSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tutorsFilterReducer } from "./slices/tutorsFilterSlice";
import { authReducer } from "./slices/authSlice";
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

const rootReducer = combineReducers({
  auth: authReducer,
  cities: citiesReducer,
  faculties: facultiesReducer,
  facultiesSearchTerm: facultiesSearchTermReducer,
  tutors: tutorsReducer,
  tutorsFilter: tutorsFilterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
