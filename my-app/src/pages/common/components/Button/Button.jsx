/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";

function Button({ children, action, type = "button" }) {
  return (
    <button onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  action: PropTypes.func,
  button: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
