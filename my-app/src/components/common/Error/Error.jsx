import PropTypes from "prop-types";

const Error = ({ message }) => {
  return <div>{message}</div>;
};
Error.propTypes = { message: PropTypes.string };

export default Error;
