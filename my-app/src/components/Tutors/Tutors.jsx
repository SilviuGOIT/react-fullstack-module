import styles from "./Tutors.module.css";
import Button from "../common/Button/Button";
import AddTutor from "./AddTutor/AddTutor";
import { useEffect, useState } from "react";

const TUTORS_KEY = "tutors";

const Tutors = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(TUTORS_KEY);
    try {
      if (data) {
        setList(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
    }
  }, []); //componentDidMount

  useEffect(() => {
    localStorage.setItem(TUTORS_KEY, JSON.stringify(list));
  }, [list]); // componentDidUpdate

  const renderList = (items) => {
    return items.map((el) => {
      return (
        <>
          <div key={el.id} className={styles.tutorsListItem}>
            <div>{el.firstName}</div>
            <div>{el.lastName}</div>
            <div>
              <span>{el.email}</span>
              <span>{el.phone}</span>
              <span>{el.city}</span>
            </div>
          </div>
        </>
      );
    });
  };

  const handleTutor = (data) => {
    const newId = list.length > 0 ? list.length : 0;
    const tutorToAdd = {
      id: newId,
      firstName: data.surname,
      lastName: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
    };
    setList((prevState) => {
      return [...prevState, tutorToAdd];
    });
    setIsAddFormVisible(false);
  };

  return (
    <>
      <section className="section">
        <h1>Tutors</h1>
        <div className={styles.tutorsList}>{renderList(list)}</div>
      </section>
      {isAddFormVisible && <AddTutor onFormSubmit={handleTutor} />}
      <Button
        action={() => {
          setIsAddFormVisible(true);
        }}
      >
        Add Tutors
      </Button>
    </>
  );
};

export default Tutors;
