import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToApply, fetchCompaniesByUserId } from "./appliedAPI";

const initialState = {
  comp: [],
  status: "idle",
};

export const addToApplyAsync = createAsyncThunk(
  "apply/addToApply",
  async (cmpny) => {
    const response = await addToApply(cmpny);
    return response.data;
  }
);

export const fetchCompaniesByUserIdAsync = createAsyncThunk(
  "apply/fetchCompaniesByUserId",
  async (userId) => {
    const response = await fetchCompaniesByUserId(userId);
    return response.data;
  }
);

export const applySlice = createSlice({
  name: "apply",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToApplyAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToApplyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comp.unshift(action.payload);
      })
      .addCase(fetchCompaniesByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompaniesByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comp = action.payload;
      });
  },
});

export const { increment } = applySlice.actions;
export const selectCompany = (state) => state.apply.comp;

export default applySlice.reducer;
