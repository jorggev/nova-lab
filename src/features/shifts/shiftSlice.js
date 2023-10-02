import { createSlice } from "@reduxjs/toolkit";
import dataCategories from "../../data/dataCategories";
import products from "../../data/products";

const initialState = {
  shifts: [],
  categories: dataCategories,
  products: products,
  categorySelected: null,
  productIdSelected: null,
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
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const {
  reserveShifts,
  deleteShifts,
  setCategorySelected,
  setProductIdSelected,
} = shiftSlice.actions;

export default shiftSlice.reducer;
