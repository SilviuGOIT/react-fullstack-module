import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import FacultiesPage from "./pages/FacultiesPage";
import FacultyDescription from "./components/Faculties/FacultyDescription";
import FacultyHistory from "./components/Faculties/FacultyHistory";
import FacultyPage from "./pages/FacultyPage";
// import { useEffect, useState } from "react";

export default function App() {
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   console.log("Mouting phase: same when componentDidMount runs");
  // }, []); // metoda de LifeCycle din Class Base Components -> componentDidMount

  // useEffect(() => {
  //   console.log(value);
  //   console.log("Updating phase: same when componentDidUpdate runs");
  // }, [value]); //-> metodei de LifeCycle din Class Based Components -> componentDidUpdate

  // useEffect(() => {
  //   console.log("Mouting phase: same when componentDidMount runs");

  //   return () => {
  //     console.log("Unmounting phase");
  //   };
  // }, []); // metoda de LifeCycle din Class Base Components -> componentWillUnmount

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="faculties" element={<FacultiesPage />} />
          <Route path="faculties/:id" element={<FacultyPage />}>
            <Route index element={<FacultyDescription />} />
            <Route path="description" element={<FacultyDescription />} />
            <Route path="history" element={<FacultyHistory />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    // <main className="App">
    //   <Sidebar />
    //   <section className="container">
    //     <University />
    //     <Tutors />
    //     <Cities />
    //   </section>
    // </main>
  );
}

// https://stackblitz.com/edit/react-cn3mtn?file=index.js -> Exemplu
// https://react-icons.github.io/react-icons/ -> icon-uri
// https://emotion.sh/docs/introduction -> asemanatoare cu styled-components -> css in fisiere JS

// lectia 7
// https://www.freecodecamp.org/news/how-to-use-the-usestate-and-useeffect-hooks-in-your-project/
// https://medium.com/@asiandigitalhub/common-use-cases-for-react-js-useeffect-88385a884cf6#:~:text=Let's%20explore%20some%20of%20the,using%20useEffect%20in%20React%20JS.&text=One%20of%20the%20most%20frequent,state%20with%20the%20retrieved%20data.
// https://youtu.be/-yIsQPp31L0?si=h0mJ32GVB6AibBTe

// lectia 9
// https://www.geeksforgeeks.org/difference-between-navlink-an-link/ -> dif intre link si navlink
// https://medium.com/@stheodorejohn/useparams-hook-in-react-router-a-real-world-example-493848f7b7
// https://stackademic.com/blog/practical-steps-on-how-to-apply-the-useparams-hook-of-react-router-5cd43a2106b2
// documentatie context -> https://react.dev/reference/react/createContext
