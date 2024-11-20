import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import UniversitiesPage from "./pages/universities/UniversitiesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy, useEffect } from "react";
import { persistor } from "./redux/store";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./redux/PrivateRoute";

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
  useEffect(() => {
    persistor.purge();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route index element={<UniversitiesPage />}></Route>
          <Route
            path="faculties"
            element={
              <PrivateRoute>
                <FacultiesPage />
              </PrivateRoute>
            }
          />
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
