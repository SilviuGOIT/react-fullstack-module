import PropTypes from "prop-types";

const SearchBar = ({ text, isVisible, price }) => {
  return (
    <div>
      {isVisible ? "Afisam un text" : ""}
      {text.length > 5 && <p>Textul este mai lung de 5 caractere</p>}
      <h1>{text}</h1>
      <p>{price}</p>
    </div>
  );
};

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};

export default SearchBar;
