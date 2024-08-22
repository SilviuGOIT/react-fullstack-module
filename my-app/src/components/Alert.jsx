import "./Alert.css";
import PropTypes from "prop-types";
import clsx from "clsx";

const Alert = ({ children, variant = "info", isOutlined = false }) => {
  const alertStyles = clsx("alert", variant, isOutlined && "is-outlined");
  return (
    <p className={alertStyles}>{children}</p>
    // <p className={`alert ${variant} ${isOutlined && "is-outlined"}`}>
    //   {children}
    // </p>
  );
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  isOutlined: PropTypes.bool,
};

export default Alert;
