import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { userLogin } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    apiSlice: apiSlice.reducer,
    auth: userLogin,
  },
//   devTools: false,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
});
