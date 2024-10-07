import axios from "axios";

function setAxiosDefault() {
  const token = localStorage.getItem("token");

  axios.defaults.baseURL = "http://localhost:4001/";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default setAxiosDefault;
