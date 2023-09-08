import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
const pcSlice = createSlice({
  name: "pc",
  initialState,
  reducers: {
    pc: (state, action) => {},
  },
});

export const { pc } = pcSlice.actions;
export default pcSlice.reducer;
