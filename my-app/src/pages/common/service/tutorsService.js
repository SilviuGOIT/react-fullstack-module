import axios from "axios";

axios.defaults.baseURL = "http://localhost:4001/";

async function get() {
  const response = await axios.get("/tutors");
  return response.data;
}

async function create(tutor) {
  const response = await axios.post("/tutors", tutor);
  return response.data;
}

const tutorsService = {
  get,
  create,
};

export default tutorsService;
