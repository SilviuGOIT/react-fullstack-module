import PropTypes from "prop-types";

const Menu = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
};

export default Menu;
