import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shifts: [],
};

export const shiftSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {
    reserveShifts: (state, action) => {
      state.shifts.push(action.payload);
    },
    deleteShifts: (state, action) => {
      state.shifts = state.shifts.filter(
        (shifts) => shifts.id !== action.payload
      );
    },
  },
});

export const { reserveShifts, deleteShifts } = shiftSlice.actions;

export default shiftSlice.reducer;
