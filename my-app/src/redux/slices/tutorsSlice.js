import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import tutorsService from "../../pages/common/service/tutorsService";

const initialState = {
  status: "idle", // ""
  error: "",
  items: [],
};

export const fetchTutors = createAsyncThunk("tutors/fetchTutors", async () => {
  try {
    const result = await tutorsService.get();
    console.log("Tutors fetched:", result);
    return result;
  } catch (error) {
    console.error("Failed to fetch tutors:", error);
    throw error;
  }
});

export const addTutor = createAsyncThunk(
  "tutors/addTutors",
  // The payload creator receives the partial `{title, content, user}` object
  async (initialPost) => {
    const response = await axios.post("/tutors", initialPost);

    return response.data;
  }
);

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // GET
      .addCase(fetchTutors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTutors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTutors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // CREATE
      .addCase(addTutor.fulfilled, (state, action) => {
        // We can directly add the new post object to our posts array
        state.items.push(action.payload);
      });
  },
});

// Exportăm generatoarelor de acțiuni și reducer-ul
export const { editTutor, deleteTutor } = tutorsSlice.actions;
export const tutorsReducer = tutorsSlice.reducer;
