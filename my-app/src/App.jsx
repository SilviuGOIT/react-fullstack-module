import "./App.css";
import Tutors from "./components/Tutors/Tutors";
import University from "./components/University/University";
import Sidebar from "./components/Sidebar/Sidebar";
import Cities from "./components/Cities/Cities";
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

// lectia 7
// https://www.freecodecamp.org/news/how-to-use-the-usestate-and-useeffect-hooks-in-your-project/
// https://medium.com/@asiandigitalhub/common-use-cases-for-react-js-useeffect-88385a884cf6#:~:text=Let's%20explore%20some%20of%20the,using%20useEffect%20in%20React%20JS.&text=One%20of%20the%20most%20frequent,state%20with%20the%20retrieved%20data.
// https://youtu.be/-yIsQPp31L0?si=h0mJ32GVB6AibBTe
