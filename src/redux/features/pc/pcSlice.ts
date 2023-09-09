import { createSlice } from "@reduxjs/toolkit";
const initialState: any = {
  selectedComponents: {
    Cpu: null,
    Motherboard: null,
    Ram: null,
    Power: null,
    Storage: null,
    Monitor: null,
  },
};

const pcSlice = createSlice({
  name: "pc",
  initialState,
  reducers: {
    selectedComponent: (state, action) => {
      // const categoryName = action.payload.category;
      // state.buildPc.push(categoryName, { ...action.payload });
      const { category, component } = action.payload;
      state.selectedComponents[category] = component;
    },
  },
});

export const { selectedComponent } = pcSlice.actions;
export default pcSlice.reducer;
