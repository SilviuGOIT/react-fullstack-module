import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/slices/authSlice";
import Error from "./common/components/Error/Error";
import { selectUser } from "../redux/selectors";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: emailLogin,
        password: passwordLogin,
      };
      await dispatch(loginUser(payload)).unwrap();
      navigate("/faculties");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: emailRegister,
        password: passwordRegister,
      };
      await dispatch(registerUser(payload));
    } catch (err) {
      console.error("Register faield", err);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const errorMessage = userInfo?.error || "";

  return (
    <>
      <section>
        {errorMessage.length > 0 && <Error message={errorMessage}></Error>}
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <label>
            <span>Email</span>
            <input
              type="text"
              onChange={(e) => setEmailLogin(e.target.value)}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
          </label>
          <button>Login</button>
        </form>
        <form onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <label>
            <span>Email</span>
            <input
              type="text"
              onChange={(e) => setEmailRegister(e.target.value)}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
          </label>
          <button>Register</button>
        </form>

        <button onClick={handleLogout}>Logout</button>
      </section>
    </>
  );
};

export default LoginPage;
