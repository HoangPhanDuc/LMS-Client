import { createSlice } from "@reduxjs/toolkit";

interface Token {
  token: String;
  refreshToken: String;
  user: String;
}

const initialState = { token: "", refreshToken: "", user: "" } satisfies Token;

const userLoginIn = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegis: (state, action) => {
      state.token = action.payload.token;
    },
    userLogin: (state, action) => {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    userLogout: (state) => {
      state.token = "";
      state.user = "";
    },
  },
});

export const { userLogin, userRegis, userLogout } = userLoginIn.actions;
export default userLoginIn.reducer;
