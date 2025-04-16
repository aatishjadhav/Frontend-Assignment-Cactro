import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    showPopup: true,
  },
  reducers: {
    togglePopup: (state) => {
      console.log("Previous state:", state.showPopup);
      state.showPopup = !state.showPopup;
      console.log("Updated state:", state.showPopup);
    },
  },
});

export const { togglePopup } = popupSlice.actions;

export default popupSlice.reducer;
