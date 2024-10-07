import axios from "axios";
import setAxiosDefault from "./config";

setAxiosDefault();

async function get() {
  try {
    console.log("Attempting to fetch tutors...");
    const response = await axios.get("/tutors");
    console.log("API Response:", response.data);
    return response.data;
  } catch (err) {
    console.log("Error fecthing tutors: ", err);
  }
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
