export const setFacultiesSearchTerm = (value) => {
  return {
    type: "faculties/setSearchTerm",
    payload: value,
  };
};

export const addFaculty = (value) => {
  return {
    type: "faculties/addFaculty",
    payload: value,
  };
};

export const deleteFaculty = (value) => {
  return {
    type: "faculties/deleteFaculty",
    payload: value,
  };
};
