import "./App.css";
import Menu from "./Menu";
import Button from "./Button";
import SearchBar from "./SearchBar";
import Tutors from "./Tutors";

function App() {
  const menuItems = [
    { id: 1, name: "Acasa" },
    { id: 2, name: "Despre noi" },
    { id: 0, name: "Contact" },
  ];
  const functionClick = () => console.log("Scrie asa");
  const functionClick2 = () => console.log("Altceva");
  const isVisible = false;

  const data = {
    name: "MIT",
    description:
      "Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ",
    tutors: [
      {
        id: 0,
        firstName: "John",
        lastName: "ZZZZZZZZZZZ",
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
    ],
    cities: ["Kyiv", "London", "Berlin"],
    department: [
      { name: "Faculty of Computer Science" },
      { name: "Faculty of Automation" },
      { name: "Faculty of Neural Networks" },
    ],
  };

  return (
    <>
      <h1>Hello</h1>
      <Menu items={menuItems} />
      <Button text="Button" icon="&" handleClick={functionClick} />
      <Button text="Alt buton" icon="XY" handleClick={functionClick2} />
      <SearchBar text="Idk356sads daasdas" isVisible={isVisible} price={23} />
      <Tutors tutors={data.tutors} />
    </>
  );
}

export default App;
