import { Component } from "react";
import styles from "./Tutors.module.css";
import PropTypes from "prop-types";
import Button from "../common/Button/Button";
import AddTutor from "./AddTutor/AddTutor";

class Tutors extends Component {
  state = {
    isAddFormVisible: false,
    list: [
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
    ],
  };
  renderList = (items) => {
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

  handleTutor = (data) => {
    const newId = this.state.list.length > 0 ? this.state.list.length : 0;
    const tutorToAdd = {
      id: newId,
      firstName: data.surname,
      lastName: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
    };
    this.setState((prevState) => {
      return {
        list: [...prevState.list, tutorToAdd],
        isAddFormVisible: false,
      };
    });
  };

  render() {
    const { isAddFormVisible, list } = this.state;
    return (
      <>
        <section className="section">
          <h1>Tutors</h1>
          <div className={styles.tutorsList}>{this.renderList(list)}</div>
        </section>
        {isAddFormVisible && <AddTutor onFormSubmit={this.handleTutor} />}
        <Button
          action={() => {
            this.setState({ isAddFormVisible: true });
          }}
        >
          Add Tutors
        </Button>
      </>
    );
  }
}

Tutors.propTypes = {
  list: PropTypes.array,
};

export default Tutors;
