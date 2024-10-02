import styles from "./Tutors.module.css";
import Button from "../../../common/components/Button/Button";
import AddTutor from "./AddTutor/AddTutor";
import Icon from "../../../common/components/Icon/Icon";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTutor, fetchTutors } from "../../../../redux/slices/tutorsSlice";
import Error from "../../../../pages/common/components/Error/Error";

const Tutors = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const test = useRef(null);
  const list = useSelector((state) => state.tutors.items);
  const dispatch = useDispatch();
  const tutorStatus = useSelector((state) => state.tutors.status);
  const error = useSelector((state) => state.tutors.error);
  const isLoading = tutorStatus === "loading";
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  useEffect(() => {
    if (tutorStatus === "idle") {
      dispatch(fetchTutors());
    }
  }, [tutorStatus, dispatch]);

  const renderList = (items) => {
    if (!items || !Array.isArray(items)) {
      return <>Loading...</>;
    }

    if (items.length === 0) {
      return <div>There are no tutors.</div>;
    }

    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{name}</div>
          <div className={styles.address}>
            <span>{el.email}</span>
            <span>{el.telephone}</span>
            <span>{el.city}</span>
          </div>
          <div>{el.role}</div>
        </div>
      );
    });
  };

  function renderTutors() {
    const filteredList =
      searchTerm.length > 0
        ? list.filter((el) => el.firstName.includes(searchTerm))
        : list;

    return (
      <>
        <div>{renderList(filteredList)}</div>
        <div className={`box ${styles.tutorsList}`}>{renderList(list)}</div>

        {isAddFormVisible && <AddTutor onFormSubmit={handleTutor} />}

        <Button
          action={() => setIsAddFormVisible(true)}
          isDisabled={addRequestStatus === "pending"}
        >
          {addRequestStatus === "pending" ? "Adding Tutor..." : "Add tutor"}
        </Button>
      </>
    );
  }

  async function handleTutor(data) {
    try {
      setAddRequestStatus("pending");

      const tutorToAdd = {
        firstName: data.name,
        lastName: data.surname,
        telephone: data.phone,
        email: data.email,
        city: data.city,
        role: "Member",
      };

      await dispatch(addTutor(tutorToAdd));
    } catch (err) {
      console.error("Failed to saved the tutor: ", err);
    } finally {
      setIsAddFormVisible(false);
      setAddRequestStatus("idle");
    }
  }

  return (
    <section ref={test} className="section">
      <h1>
        <Icon variant="cat" label="cat" />
        <span>Tutors</span>
      </h1>
      {error.length > 0 && <Error message={error} />}
      {!error && renderTutors()}
    </section>
  );
};

export default Tutors;
