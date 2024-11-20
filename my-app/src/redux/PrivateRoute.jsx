import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  // trebuie sa luam starea de autentificare a user-ului
  const isAuth = useSelector((state) => {
    console.log(state, "state");
    return state.auth.isAuth;
  });
  console.log(isAuth, "isAuth");
  // verificam starea si implementam logica
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
