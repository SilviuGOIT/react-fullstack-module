import React from "react";
import PropTypes from "prop-types";
import styles from "./Error.module.css";

const Error = ({ message }) => {
  return <div className={styles.alert}>{message}</div>;
};

Error.propTypes = { message: PropTypes.string.isRequired };

export default Error;
