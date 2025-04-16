import { configureStore } from "@reduxjs/toolkit";
import { popupSlice } from "../slices/popupSlice";

export const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
  },
});
