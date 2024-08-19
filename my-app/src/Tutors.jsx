import PropTypes from "prop-types";

const Tutors = ({ tutors }) => {
  return (
    <ul>
      {tutors.map((item) => {
        return <li key={item.id}> {`${item.firstName}  ${item.lastName}`}</li>;
      })}
    </ul>
  );
};

Tutors.propTypes = {
  tutors: PropTypes.array.isRequired,
};
export default Tutors;
