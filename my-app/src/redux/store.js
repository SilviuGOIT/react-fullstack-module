import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { facultiesReducer } from "./reducers/facultiesReducer";
const enhancer = devToolsEnhancer();

export const rootReducer = combineReducers({
  faculties: facultiesReducer,
});

// const rootReducer = (state, action) => {
//   switch (action.type) {
//     case "faculties/setSearchTerm":
//       return {
//         ...state,
//         faculties: {
//           ...state.faculties,
//           searchTerm: state.faculties.searchTerm,
//         },
//       };
//   }
// };

export const store = createStore(rootReducer, enhancer);
