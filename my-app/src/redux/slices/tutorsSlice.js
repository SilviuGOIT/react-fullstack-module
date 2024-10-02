import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tutorsService from "../../pages/common/service/tutorsService";

const initialState = {
  status: "idle",
  error: "",
  items: [],
};

export const fetchTutors = createAsyncThunk("tutors/fetchTutors", async () => {
  const response = await tutorsService.get();
  return response;
});

export const addTutor = createAsyncThunk("tutors/addTutors", async (tutor) => {
  const response = await tutorsService.create(tutor);
  return response.data;
});

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
        state.status = "fulfilled";
        console.log(state, "state from createSlice");
        state.items = action.payload;
      })
      .addCase(fetchTutors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // CREATE
      .addCase(addTutor.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

// Exportam generatoarele de actiuni si reducerul
export const tutorsReducer = tutorsSlice.reducer;
