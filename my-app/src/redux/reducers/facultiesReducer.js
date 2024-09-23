const initialState = {
  list: [
    {
      id: 1,
      name: "Faculty of law",
      description: "Loren ipsum",
    },
    {
      id: 2,
      name: "Faculty of engineering",
      description: "Loren ipsum 2",
    },
  ],
};

export const facultiesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Implementam logica pentru fiecare tip de actiune
    case "faculties/addFaculty":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "faculties/deleteFaculty":
      return {
        ...state,
        list: state.list.filter((el) => el.id !== action.payload),
      };
    case "faculties/setSearchTerm":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
