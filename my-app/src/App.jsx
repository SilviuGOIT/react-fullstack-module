import "./App.css";
import Tutors from "./components/Tutors/Tutors";
import University from "./components/University/University";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const tutors = [
    {
      id: 0,
      firstName: "John",
      lastName: "Smith",
      phone: "+1 302-865-7394",
      email: "johnsmith@goit.global",
      city: "New York",
      options: "Group creation",
    },
    {
      id: 1,
      firstName: "Antonio",
      lastName: "García",
      phone: "+34 456 890 302",
      email: "antonio.garcia@goit.global",
      city: "Madrid",
      options: "Group creation, editing teacher profiles",
    },
  ];

  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <University />
        <Tutors list={tutors} />
      </section>
    </main>
  );
}
