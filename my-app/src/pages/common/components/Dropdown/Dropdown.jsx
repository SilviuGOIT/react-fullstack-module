import React, { useState } from "react";
import PropTypes from "prop-types";
import { HiDotsVertical, HiPencil, HiTrash } from "react-icons/hi";
import styles from "./Dropdown.module.css";

const Dropdown = ({ onEdit, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleEdit = () => {
    onEdit();
    setIsVisible(false);
  };

  const handleDelete = () => {
    onDelete();
    setIsVisible(false);
  };

  return (
    <div>
      <span className={styles.dropdownToggle} onClick={toggleVisibility}>
        <HiDotsVertical />
      </span>
      {isVisible && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem} onClick={handleEdit}>
            <HiPencil />
            Edit
          </div>
          <div className={styles.dropdownItem} onClick={handleDelete}>
            <HiTrash />
            Delete
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Dropdown;
