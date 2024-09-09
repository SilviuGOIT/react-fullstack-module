import "./App.css";
import Tutors from "./components/Tutors/Tutors";
import University from "./components/University/University";
import Sidebar from "./components/Sidebar/Sidebar";
import Cities from "./components/Cities/Cities";

export default function App() {
  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <University />
        <Tutors />
        <Cities />
      </section>
    </main>
  );
}

// https://stackblitz.com/edit/react-cn3mtn?file=index.js -> Exemplu
// https://react-icons.github.io/react-icons/ -> icon-uri
// https://emotion.sh/docs/introduction -> asemanatoare cu styled-components -> css in fisiere JS
