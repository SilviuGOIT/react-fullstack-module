import { Component } from "react";
import styles from "./Tutors.module.css";
import PropTypes from "prop-types";
import Button from "../common/Button/Button";
import AddTutor from "./AddTutor/AddTutor";

const TUTORS_KEY = "tutors";

class Tutors extends Component {
  componentDidMount() {
    const data = localStorage.getItem(TUTORS_KEY);
    try {
      if (data) {
        this.setState({
          list: JSON.parse(data),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState?.list.length !== this.state.list.length) {
      localStorage.setItem(TUTORS_KEY, JSON.stringify(this.state.list));
    }
  }

  componentWillUnmount() {
    console.log("Tutors Unmounting...");
  }

  state = {
    isAddFormVisible: false,
    list: [],
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
