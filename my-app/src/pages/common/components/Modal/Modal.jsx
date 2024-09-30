import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { HiX } from "react-icons/hi";

const Modal = ({ isOpen, handleClose, header, children }) => {
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape, false);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <dialog className={styles.modal}>
        <header className={`${styles.header} relative`}>
          <button className={styles.closeBtn} onClick={handleClose}>
            <HiX />
          </button>
        </header>
        <main className={styles.content}>
          <h1 className={styles.title}>
            {header.icon}
            {header.label}
          </h1>
          {children}
        </main>
      </dialog>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  header: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
