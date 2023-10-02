import shiftSlice from "../features/shifts/shiftSlice";
import { configureStore } from "@reduxjs/toolkit";
import { shiftsApi } from "../services/shiftsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    shifts: shiftSlice,
    [shiftsApi.reducerPath]: shiftsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shiftsApi.middleware),
});

setupListeners(store.dispatch);

export default store;