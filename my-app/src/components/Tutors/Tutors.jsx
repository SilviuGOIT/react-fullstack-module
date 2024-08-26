import { Component } from "react";
import styles from "./Tutors.module.css";
import PropTypes from "prop-types";

class Tutors extends Component {
  renderList = (items) => {
    return items.map((el) => {
      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{el.firstName}</div>
          <div>{el.lastName}</div>
          <div>
            <span>{el.email}</span>
            <span>{el.phone}</span>
            <span>{el.city}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    const { list } = this.props;
    return (
      <section>
        <h1>Tutors</h1>
        <div>{this.renderList(list)}</div>
      </section>
    );
  }
}

Tutors.propTypes = {
  list: PropTypes.array,
};

export default Tutors;
