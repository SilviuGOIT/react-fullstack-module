import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import UniversitiesPage from "./pages/universities/UniversitiesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy } from "react";

// Importurile cu lazy (dinamice), trebuie sa fie dupa cele normale

const FacultiesPage = lazy(() => import("./pages/faculties/FacultiesPage"));
const FacultyPage = lazy(() => import("./pages/faculties/faculty/FacultyPage"));
const FacultyDescription = lazy(() =>
  import("./pages/faculties/faculty/components/FacultyDescription")
);
const FacultyHistory = lazy(() =>
  import("./pages/faculties/faculty/components/FacultyHistory")
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<UniversitiesPage />}></Route>
          <Route path="faculties" element={<FacultiesPage />} />
          <Route path="faculties/:id" element={<FacultyPage />}>
            <Route index element={<FacultyDescription />} />
            <Route path="description" element={<FacultyDescription />} />
            <Route path="history" element={<FacultyHistory />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//lectia-13
//https://redux-toolkit.js.org/api/createAsyncThunk
//https://medium.com/@bremarotta/redux-toolkit-createasyncthunk-829e139ea623
//https://www.youtube.com/watch?v=VQgliO57b40&ab_channel=CodingAddict
//https://www.npmjs.com/package/redux-persist
