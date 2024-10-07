import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import UniversitiesPage from "./pages/universities/UniversitiesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy, useEffect } from "react";
import { persistor } from "./redux/store";
import LoginPage from "./pages/LoginPage";

// Importurile cu lazy (dinamice), trebuie sa fie dupa cele normale

const FacultiesPage = lazy(() => import("./pages/faculties/FacultiesPage"));
const FacultyPage = lazy(() => import("./pages/faculties/faculty/FacultyPage"));
const FacultyDescription = lazy(() =>
  import("./pages/faculties/faculty/components/FacultyDescription")
);
const FacultyHistory = lazy(() =>
  import("./pages/faculties/faculty/components/FacultyHistory")
);

// import FacultiesPage from './pages/FacultiesPage'
// import FacultyPage from './pages/FacultyPage'
// import FacultyDescription from './pages/universities/components/Faculties/FacultyDescription'
// import FacultyHistory from './pages/universities/components/Faculties/FacultyHistory'

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

// https://dev.to/supertokens/oauth-vs-jwt-json-web-tokens-an-in-depth-comparison-5gnp
// https://www.npmjs.com/package/jsonwebtoken
// https://blog.netcetera.com/how-to-create-guarded-routes-for-your-react-app-d2fe7c7b6122
