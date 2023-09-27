import { configureStore } from "@reduxjs/toolkit";
import shiftSlice from "../features/shifts/shiftSlice";

export const store = configureStore({
  reducer: {
    shifts: shiftSlice,
  },
});
