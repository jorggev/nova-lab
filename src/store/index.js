import { authApi } from "../services/authApi";
import authSlice from "../features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shiftsApi } from "../services/shiftsApi";
import shiftSlice from "../features/shifts/shiftSlice";

const store = configureStore({
  reducer: {
    shifts: shiftSlice,
    auth: authSlice,
    [shiftsApi.reducerPath]: shiftsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shiftsApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
