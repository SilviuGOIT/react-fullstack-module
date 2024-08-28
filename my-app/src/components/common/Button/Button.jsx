import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button({ children, action, type = "button" }) {
  return (
    <button className={styled.button} onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
